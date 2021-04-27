export default function List() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("You have submitted the form.");
  };
  return (
    <div>
      <h1>Form</h1>
      <form>
        <fieldset>
          <label>
            <p>Your Name</p>
            <input username="name" type="text" />
          </label>
        </fieldset>

        <fieldset>
          <label>
            <p>Your number</p>
            <input userNumber="name" type="number" />
          </label>
        </fieldset>

        <fieldset>
          <label>
            <p>Supplier/Dealer's Name</p>
            <input supplier="name" type="text" />
          </label>
        </fieldset>

        <fieldset>
          <label>
            <p>Supplier/Dealer's Number</p>
            <input supplierNumber="name" type="number" />
          </label>
        </fieldset>

        <fieldset>
          <label>
            <p>City</p>
            <input city="name" type="text" />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>State</p>
            <input state="name" type="text" />
          </label>
        </fieldset>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
