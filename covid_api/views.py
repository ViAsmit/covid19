from django.db.models.query import QuerySet
from django.shortcuts import get_object_or_404
from covid.models import Shop
from .serializers import ShopSerializer
from rest_framework import viewsets, filters, generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from .tweets import getTweets
import json
import re
phoneRegex = re.compile("(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}")


data = {'data': [{'id': '1390257003776208904', 'text': 'RT @AnilMatt00: Who Is Liar  ????? \n#ArvindKejriwal Writes Letter Thanking @narendramodi ji  For Supply Of 730 MT #Oxygen To #Delhi Ystrdy…'}, {'id': '1390256963661926403', 'text': 'RT @DevenderYadav_: I urge hospitals to increase beds. We will add more beds if there is proper #Oxygen supply: #Delhi CM #ArvindKejriwal'}, {'id': '1390256892237123584', 'text': 'RT @UmeshCol: Hope Delhi will get 700 MT #Oxygen ..Now all the courts need to intervene in #COVIDEmergency2021\n.. All the Govt and Pvt Hosp…'}, {'id': '1390256864571527168', 'text': 'RT @Lakshmimittal12: Delhi Will Breathe Again: Oxygen Concentrator for rent in delhi:- Sanjay rana\n09582890542\n#OxygenConcentrators  for pu…'}, {'id': '1390256818367057920', 'text': 'Delhi:\n\n*Non Oxygen Beds Available*\n\n#UFH #UnitedForHumanity #COVIDEmergencyIndia #CovidCrisis #Oxygen #CovidResources #Plasma #CovidSOS #CovidHelp #Emergency #Delhi #DelhiSOS #DelhiNeedsOxygen #SOS #Bed #OxygenBeds #DelhiCovid #DelhiFightsCorona\n#OxygenRefill #BedsAvailability https://t.co/w3ySeciEql'}, {'id': '1390256703275364356', 'text': "RT @utkarsh_aanand: #Delhi Govt again opposes constitution of a committee for #Oxygen audit but the court clarifies its platform won't be u…"}, {'id': '1390256691900387335',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   'text': '@ArvindKejriwal #Delhi को प्रतिदिन 700 मीट्रिक टन #Oxygen की जरूरत है, कल पहली बार दिल्ली को 730 मीट्रिक टन ऑक्सीजन मिली है... लेकिन 1 दिन 700 मीट्रिक टन ऑक्सीजन से काम नहीं चलेगा,  हमें प्रतिदिन 700 मीट्रिक टन ऑक्सीजन चाहिए: दिल्ली CM @ArvindKejriwal \n\n #DelhiNeedsOxygen https://t.co/XjH1Il5RiV'}, {'id': '1390256515974524932', 'text': 'Ghaziabad:\n\n*ICU Beds Available*\n\n#UFH #UnitedForHumanity #COVIDEmergencyIndia #CovidCrisis #Oxygen #CovidResources #Plasma  #CovidSOS #CovidHelp #Emergency #Delhi #DelhiSOS #DelhiNeedsOxygen #SOS #Refill #OxygenBeds\n#DelhiCovid #DelhiFightsCorona\n#OxygenRefill https://t.co/a3btfw5kfG'}, {'id': '1390256500652732419', 'text': "RT @MirrorNow: For the first time, Centre supplied 730 tons #Oxygen to Delhi yesterday. Delhi requires 700 tons. We're thankful to Centre,…"}, {'id': '1390256498542923777', 'text': '#Delhi को प्रतिदिन 700 मीट्रिक टन #Oxygen की जरूरत है, कल पहली बार दिल्ली को 730 मीट्रिक टन ऑक्सीजन मिली है... लेकिन 1 दिन 700 मीट्रिक टन ऑक्सीजन से काम नहीं चलेगा,  हमें प्रतिदिन 700 मीट्रिक टन ऑक्सीजन चाहिए: दिल्ली CM @ArvindKejriwal \n\n#DelhiCovid #DelhiNeedsOxygen @AAPInNews https://t.co/ZLybdW166e'}], 'meta': {'newest_id': '1390257003776208904', 'next_token': 'b26v89c19zqg8o3foswqk5tvld7nc05rppagk8wxmh6yl', 'oldest_id': '1390256498542923777', 'result_count': 10}}


class ShopList(generics.ListCreateAPIView):
    serializer_class = ShopSerializer
    queryset = Shop.verifiedObjects.all()


class ShopDetail(generics.RetrieveAPIView):

    serializer_class = ShopSerializer

    def get_object(self, queryset=None, **kwargs):
        item = self.kwargs.get('pk')
        return get_object_or_404(Shop, id=item)


class ShopSearch(generics.ListAPIView):
    serializer_class = ShopSerializer

    def get_queryset(self):
        queryset = Shop.objects.all()
        item = self.request.query_params.get('city')
        if item is not None:
            queryset = queryset.filter(city=item)
            return queryset

        item = self.request.query_params.get('state')
        if item is not None:
            queryset = queryset.filter(state=item)
            return queryset

        return queryset


class TwitterSearch(generics.ListAPIView):
    serializer_class = ShopSerializer

    def get_queryset(self):
        allTweets = getTweets()
        data = json.loads(allTweets)
        matches = []
        for x in data['data']:
            x = phoneRegex.search(x['text'])
            if x is not None:
                matches.append(x.group(0))
        matches = set(matches)
        print(matches)
        for x in matches:
            shop = Shop()
            shop.phone = str(x)
            try:
                shop.save()
            except:
                print('errr')
