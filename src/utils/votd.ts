import axios from "axios";

export async function getVerseofDay() {
  const response = await axios.get(
    "https://labs.bible.org/api/?passage=votd&type=json"
  );
  console.log("response: ", response);
  return response.data;
}
