const myHeaders = new Headers();
myHeaders.append("sec-ch-ua", "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"");
myHeaders.append("pragma", "no-cache");
myHeaders.append("sec-ch-ua-mobile", "?0");
myHeaders.append("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36");
myHeaders.append("content-type", "application/x-www-form-urlencoded");
myHeaders.append("accept", "application/json, text/plain, */*");
myHeaders.append("authorisation", "Token eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJNQTM1NzMxMTgiLCJwYW4iOiIxMi8xMi8yMDAzIiwicm9sZSI6ImFkbWluIiwiZXhwIjoxNzE5NDQ3MDcwfQ.cuq7Vp08uVs79cwMeK4admzQJeV4-eXRI-la4XvTokZVfhO6RLMN2B_eTX33utRrsTHYWmYKNRqDKks7JA0L_Q");
myHeaders.append("cache-control", "no-cache");
myHeaders.append("Referer", "https://trade.mstock.com/");
myHeaders.append("priority", "u=1, i");
myHeaders.append("sec-ch-ua-platform", "\"Windows\"");

const urlencoded = new URLSearchParams();
urlencoded.append("\"QMYNumj8xe6MPHa7jfy5+hhg0so1AtJsDcvtS7WOP60awA8SQYmUYt73ciaOxKAp4ejdNoGwicukBQHcQO1DDlK3tpNgtCj8CLwye64ENbIzEi5EIkM1T7n9/m8WlZqggArUMP3wSilx/Ut7Fh6WaK48LaQDiJSG/ksu4SjxC0/VpWqJmhAgjA8FJM+FMUWzIsVqW8hjM7mexlkYQeP9+C/lGCkPTDvd3M21UjMzzhBxjnwBx9zVAVg9dFX0qKuRZwejrl8KZZRLL3gS97B8jQerqyRv9iT7upWVDPwhmNKfhK/VlWQr+yq5gPyHGEvdD0f8GPx/9sl37HPXB/Rbe55QDvWenQ7q13LVic/YC34bC/AUXsOJ55k/v6F6wDsox5CZ26tZHSxZWJ8Cm64JCaV7ttK3L6sBHFZbsvHJGQaBhWyQ+1sLZlrNo8i1ZPuLHblhDgyCARB1e43E1m18oZ4YNqvdiWseGiaVwAaFLvZa3nmPZHsUv/A2+A6Pg8swj+gJQWEsxv0QwAO0l6uF6CVacZ6pRGT2LKaUhjkkXm4xkBJCFPN4nCfIcF4BXGgxKeSj9/HDYZdGf8zXAAVW220zt94NeHt+Q+GJ1B2GrGbzA6FIlLFxyjJHbOYrtWA7Uy3jqJyWMyVUdWgrU3u5n8aAmunLEpv8rMX98LFKUZs=\"", "");

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: urlencoded,
  redirect: "follow"
};

fetch("https://trade2.mstock.com/trade/placeorder", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));