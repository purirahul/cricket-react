const API_KEY="liBfHdR0hGWcjGniTVPwd1kQjk62";


export const getMatches = () => {
  const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`;

  return fetch(url)
        .then(res => res.json())
        .catch(error => console.log(error));
};
