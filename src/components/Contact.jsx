const Contact = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      <div>
        <div>
          <form> 
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5"></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
