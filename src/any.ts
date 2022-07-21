import axios from 'axios';
export { };

let url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url).then(function (response) {
  interface Article {
    id: Number;
    title: String;
    description: String;
  }

  let data: Article[] = response.data;
  console.log(data);
});
