import axios from "axios";

export default {
  async getData() {
    try {
      const data = await axios.get(
        "//www.filltext.com?rows=10&name={firstName}&lastName={lastName}&city={city}&business={business}"
      );
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
};
