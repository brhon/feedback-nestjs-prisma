import axios from "axios";

class FeedbackService {
  //
  url = "http://localhost:8000";

  getAll() {
    return axios.get(this.url + "/feedback/all");
  }

  addNewFeedback(data) {
    console.log("oui");
    return axios.post(this.url + "/feedback/create", data);
  }

  deleteFeedback(id) {
    return axios.delete(this.url + `/feedback/delete/${id}`);
  }
}

export default new FeedbackService();
