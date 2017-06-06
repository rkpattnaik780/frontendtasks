$(document).ready(function () {
  var longtd, lattd, city, country, state ;
  var count =  0 , bg ;
  var api_l = "http://ip-api.com/json";
  
  $.getJSON(api_l, function (pos) {
    longtd = pos.lon;
    lattd = pos.lat;
    city = pos.city;
    country = pos.country;
    state = pos.regionName;
    $("#ct").html(city + " ," + state + " ," + country);
    var api = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lattd + '&lon=' + longtd + '&appid=b86d21440d8c9a110912a2eb0845abb4';
    var temp, tempc, tempf, hdty, wspeed;
    $.getJSON(api, function (data) {
      temp = data.main.temp;
      hdty = data.main.humidity;
      wspeed = data.wind.speed;
      tempc = temp - 273;
      bg = tempc ;
      tempf = 9 / 5 * tempc + 32;
      wspeed = wspeed * 1.852;
      $("#temp").html(tempc.toFixed(1) + "&deg;C");
      $("#tempf").html(tempf.toFixed(1) + "&deg;F");
      $("#hdty").html(hdty + '%');
      $("#ws").html(wspeed.toFixed(1) + ' knots');   
      if( tempc >= 35)
       {
        $('body').css('background-image', "url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8" + 
        "PEBAPEBAPDQ8QDQ8PDw8PDw8PDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNyguLisBCgoKDg0OFxAQGi0d" + 
        "HSUtKystLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLSsrLS0tK//AABEIALcBEwMBEQACEQE" + 
        "DEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EAEIQAAIBAwIDBgQCBwUHBQAAAAECAAMREgQhBTFBBhMiU" + 
        "YGxMmFxoSPBBxQkQnKR0VJic4LSMzRDZKOys2N04vDx/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv" + 
        "/EADURAAICAgECAggGAAYDAAAAAAABAhEDEiEEMSIyBRNBUWGBscEUI0Jx0fBykaGywuEVNGL/2gAMAwEAAhEDEQA/AM9EnyLZ9YGVZ" + 
        "NgTCxWA9oANaADWgArQAcCAEgICJBYAEVYCCqsRIVFgJh0SMhh6aRkstUqcZm2W6VKBm2XaVCUkZORap0JSRk5B0oStSdifcQ1FsRahDUewCpRkNFK" + 
        "RVq0JJopFGtSiNUynVpwNUyq6RFoA6xFoAywKQJliKIERjBlYDIMsLAC6ykwLujXwD19zOrG/CjGfcqKk42zoChYrAlaIBrQAa" + 
        "0YCtABWgA9oASAiAmqwEEVYEhVWAgyLGSw6LAhlmkkZDLlJIzKTL9ClKRjJl6jSmiRi2XKdKaqJk5FhaU0USGy" + 
        "XdR6MWxFqUlxGmAqUpm4lqRTq0pk0aplDUUpBtFmfWSI2iynVWI0RWdYjRFd1iKQFlgUDIgMgRAZBlgMGyxjLmkXwD19zOnH5TCfcrK" + 
        "s5GzpJhYrEIiAxrRiGtABWgMVoAPaICQEBBFWAgirAQZVgSGRYyGHRYyGW6SxmbL1BJSMZM0aCS0jCTL9FJvFGMmXKVObwjZk2WFSdUcRFksZr6kRFk" + 
        "mU8Q7K9RJyTjRaZTrJMJI1izP1CTFo2izNrpIZvFlGssRsirUWSaIrusC0AYRFA2EBgyIFECIDIMsALukXwD19zOnH5UYz7ldVnJZ0ErRAMRGA1oAMR" + 
        "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)") 
    }          
   else if( tempc >= 25 && tempc < 35){
     $("body").css("background-image" , "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXFxsbGBgYGR8dGhkaGhgZIBkaGhgdICgiGB8lHRgYITEiJSotLi4uGB8zODMvNygtLi0BCgoKDg0OGxAQGy4lHyYtLS0rLS4tLS8tLS0tLystLS0vLS0tLS0tLS8tLS0tLS0tLS0vLS0tLS8tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAECBwj/xABAEAACAQIEBAMFCAECBgEFAQABAhEDIQAEEjEFIkFRE2FxBjKBkaEUI0JSscHR8OEzYgcVcoKS8UMkNESi4hb/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMEAAUG/8QALREAAgIBAwEGBgMBAQAAAAAAAAECESEDEjFBBFFhcYHwEyKRodHxMrHB4UL/2gAMAwEAAhEDEQA/AK9xCtVqVNRDVKkjUzCVYkdVi7enyxDn11s1WpTJLyRexO2oGLgWEXuN8OQQAHRNHMSpBI0kflYySACLA/rjM1k6cKRrZTq94BQDf3QCbXHyx8+9RI07CpUsqJEkC53mI/v7YsXAuDM7CsabtRJ5wulB3qKok7LDCN4iMFHLu1JacDShJ93m5wsza4tb498W72ZOWVGoV0Q07jWZWqS0TKTNpiR+Ub4eGopSywOFFQ4gKYhVSs+rQadRwQVQzJKgnxLAencwAHnFMuXShTRKMutglyQgDAEQHGsqJDywIImRBsPG8jlvC8Kl4iyCqCJG8AmROkksZn9gK5S9mqwdvu2IuGMedzp1WBKm/byw2rqqLp58jlFiXJ5OtSphk1hmqMrJbQVQlTJBnUGdBpv73wDTh1A6KDlCD9toozFTZg5DQRyxMWN7Ydrw1jw+oNAVqVd6qi0rEsV3BgxA9T1AwHml8PKQHJqHOalXpFKsQCbgoTHW50+QwIqLal0OyL8tUAHEwACqvBJJkAVagBWNzMb/APtrXp1myms00eR4oqILoKbSFLCxFiIkwCMLuC5asavEaWqC9UmpAksoqVRUAT8QIbbUPw4tPspwcnLUatSs2hgpdJgGYjflgHooE7z0xyW6eP0G65KdnMiA+Y2fxaTVF1ahBqKNTafzbxPkdoOLpxDh9YZSjWc01KooYKhPKQsRE/lBNrXvAINP41mG8enl1iKLDLs9+YGqwp6jt/poLD/d5gejZ7NIGRaw55jSk6ekS3aInDVtjKznWKFHAlk01IUchLb6ipUBY6CSRtcAdxebNZYCpSDVG106qkEkGJQ6r3kWA+dr4fcBRWpMoUKFYoNMbUjCiR6T8ThHxxaiZrLOQzAMZsL9Nh37HvvjnpVBSTOjLNEHHspU06dFMlYCqoh9wRpIF7C/oe5wXwVnTwyVgVOaRYExflFhft3w8anTZyHiYBJ9eh+W2F2fo1iulGGlboDEkAn8XW3z+F1lDm/T0DENr8OQvreCoIIBEhZ3gRAn9h2wNn8qFRSo1BZnrq1bEkGY06tsNKdPxEGqzCQY6H4HBBoKwhgCevni2no2uOmBHKil8R4TVqgKhKUgwGgmCyF73HQGd+kYUcfd6hVSTpL+9F2Ij6Dt6Yu+eyioAE96QY6nT3PQWwlzVZmq0kOqq0Md/dQQrGY72nqcZtS1Lb1RaHFlY4hwxUYs7KxZuVQZ6CDb12HbFa9os1U8VKQ1KxUhgREHVAA+Qv649ArZalSrEha9g0VWAgMAbaDAcGQYMbDzxXcxkGzGZ1+Ewp0lCqqsAQC7MIMQvXba3bAUYx5eRXJvCKXluBVa2o01dwCdTkcijdWIHu2BuTGDG9k6tMKXUc6ylxz/APTE3G94+dsej8J4DSJZarOoZRAlgsxcmbRyrvabRjftZXo/dU9S1fDRgIYkiI94gETA26R1xTc9u4ntzTPP8hwepU0U1lSzSL8pJ0ibCbCZ3xLW4KyHQ0EqbwQRJi8ix+eHvAqVXMMy0UhAQXuAQAZm9p3ifPbAXFMuviJSWprMwzKJnmPNyM+q1oXqNp3R72rGqKFi5dRuR5R38++JaVWlqEbNZmPNp1SNcWNpm5FxvhpmPZ7QyoyMxu0gqFdBdgCzcjBYGxmTtaN5PhqVFPhoUU60D1n5dbI2jT+EkLuwkzp74aOm28gcu4VU8/V8MMrLLjTpQyV02Orcr7pIAPT4YU5jP1HLFiTMTO5AI8re6MPeD0tZq5ZmphaP3rVQAQBIPKwvGoveIgCwwq4Vk6dTMKjVU0FobUCIAImJAvtte5wzi0xWxJnEkwNp+nniwoapyZpOAFLJNVhL8w1KNXvftBHbAmW4VSbioyzVNVFC2ok6bCmWiZvzEDzvg2nUrqYXLDSrEAikrNzWUBm1FhOwvi1baQrBs5wXQiLyuXUMjJLbjUwYASCAR0i+9jgGrxBRTpohcVDUVGqaySKJFqQg3SJldsH1MqxANVawoFhYBS1yC5APWDMwegO84h4nwqmlTJLQVtVQOTLhiSbUxZRpMEb2v5HBgsilr/8A8/T/APl8HWbn7ql1uN07RjeLDwr2u00lWoQWXUCeQ2DELcVQDaNgMZiqXj7+oLKKmXf7tUhmkiG6C2rla0em9/h1Rpyzpo1Ouq0x7oloExp3O/UYbcSztOiHrsBBYqsggEySAu1gOwi22KfS4wryrr7zajBMXjpInY7nt2x46UpNusGncO8gAzgGoABEGOsAQT0O9z2w14RSJ5QQzHYHTylWk6ixELpkkdfI3wg4ETWTQgLnQgABuCBLNpE6vfK3jfDvIUqynR4elmmVJYO0C+k+8YgklZHTeMGnGXAdxY+CM61Aa9RGOkPGpdQ8QTsTAaASRE2BxYEr6Wbwaoqd5vAiwHKdZ2IvfFI4pxeijJoQK+gpUCgi4gOGA06iSdhBET1nE7e02XIvRRmMjcWJiwpzygAfA9cM9Taris82Buyz8IzAR64IlHgzEAl1gL1gltQ3AknCGoq1MkrFLrUMtyxLODzNvN/ljfs/xVXzrUVMK9Eahy1J0mDAUQkioRAnz64VVFK8NzBLgfZ80ykd2mmo38mJAgYe3OCS6f6Mmk78ix+y1LRmazEAtfXJBkl9wT5+eHOSWMrTSwXw0i3kI2O8D+cUb2UzVJ83mKSuqiHCArqsHsAGFztYiTtizezxWqr0PGcMhenpKHanUZQbiNotvJ3wyU1SXj1XU6Ti/sLuM8BBzbSZVnSoVJ30gxeOgLAeuHKcJc1PEiGB5RJhbWaQZLC0+l8VPi3HlpcQSmBUWSgAI0m7RKg9952mdsXehxum9UJR1MRYkAEE7e8SNu/r2wu2V3J9cf8AAylGlQdwqgwpWeGLEnYmWcs1yO5Mduxwo4wuaepTIAGlzfubQTvHX57DDCiGemaqkSDVgAwJV2EavIjt+mFntD7RPl/AUohNRmUFTYsCoi+12vPWcaJ/EcNrv8/gSO3daGeRourc6yCRzdz3Np3/AGw38MHz2jCrI8YZpVk0sDczKhR1+Xy64cl7CLzGK6EI7XkSbdm6aRPmZxhS846GN49BQjtI2xdnaDOywQqmdXciOnb1wsyeVWjWciYRNMLfSrMWJJY3M7+mHeYcSBpmxPyj+cKsnxOkWqKqr7xBGxOkRJB6Y82ajGfPXn08u8vFtxOqhDuJSU3OpSSZE77CI+uEmUh8zXUUwEWIDpblQEnuDLjlgm4t1Fsr5tEUzYCwAtPkOnXAWTzlMJmGVbI7agB70Ksnz6YMtCO6m0+W/fcBSdFUz7PVCjXKMWXVHOLSOVTqKHSwCkfMgHFb47ldLrSpgqouz6CrXADE6zMAi2wvY3OPRmr02rJTIVaumbjbflBAkNAPpGE2dzKAu2lDBgmZE3a07xBP6Yw6s9vS8/4UjG+pR+GmrTOlDqLjTodAoDXAJnlJvJmZ2PTDKn7M1XbxAyrpYCmfu6LBlGoyqK0AGYMnadiSG6Z+ijzIQ9CDG/4h5eYxPR4+F5CVZQGEg9xfm9b/ABPTB0+0JYkjpafcxw2UZyKleonLTGoLBQmZUgkSQdKk7SQIwNkvZSg5U1Umw5STGqJkg9ZO19sS5XOh4VV3JlQfdVfxDynYjzw1pVwo1GxiTe/kI3Nr/HGpTU5JtYJONHm/tZQSlnqiUiKa1Muysxd2uAywumIYgAQZFztOK5/ypyvi+GqimiwQTfSpGoCbmwMiBI88ek+1tfLv9nqEpq8QBjaQG2mdwCvX+cU7NFGISZ6La+mbeY+GE1dSp0uPAeME0V72a4DVfMJyk8pqQCFJ1ETBtBMCMeh+y9OnQSqa9Al6UumsXAF/eOzW974D8IKXJBQzwoYCVYLFoNwALi4w84TwdswKZUHwyeckwdMQw1ye8FNjpwIajlO1G2dKCQizHtWrlmWgqszbAcw1WJU2EMukMDuVmBOoV7NZ2s+ZpMqqXpo6wygSWVvEJAIhjeIgz9fTq2TpUqZy5RaizAcRIDEkAELuNPUkyQYOKZkV/wDrhpHOsgFRJLbTsLmd4sT8cUc5p02BRTFFT2ZzLGdIMWnxkHu8sAF5gRA8hjMWgioCQ1JiwJkl2mZO/wB5vjMLv9+0DYVr/iHxR61CnT8OAleoQ/8At1vCxeS2oHf8CjfFH1MrQOUx9CPzXmQb+vwxaUzf3I8SkYVjoDL/AKjepnUFAN7CLXsMV7iWfJZgTpAsAkWsdhGw2me2DCU5OmiLZDw6u+gFKsGY0gkGNKmT3HT4Xw8oe0VdwiZl3q0hJQa9ABuAwfexAOne0YWeytesWJoqP9KGlFYaVokNJYcpKDoQTfbBJqhnRqiqF0gKaYVQ0XJkAS0m8iZnthtSlJ4yjiw1crTy70mDuQUkMNJ1kqJgry6b9WJGxEzhnkMh9oAp0qUEt/q1F1TqAhZg+6SSWETNxgHgnDYIZaWqAWMmQALEwLyPWL7YufCc/TzSrCU0UNL6QGMAyQ2uSLhTtYjHna2qmm1x6/bBVCLJ5Ktk+IUG8IuPDrK4Q+Jq0rRckKI8O97fXFd4t7Rr4HEqLgxXrColRVIBb7shGkyvuluuPQuJcQLZzIBapaK1akWAOoBqFUAFCIsaYMjsem9I4qKVKtx2hVJLLTD0iWIJZrmYgEnxE3F49cej2apxW33n34CSYu/4YZ6qubqvSXUxQnUQXCCSSWEzeI1Tb54ufBKdF6mZb7QQ/wBpqQCinxCqqzEp74jUSBIUwCZi3mfsLxWnQasKlMVA6qAGmOWoNyL/AIum5Awwo0FqNmKyulJGqOPCMzAprqAH5eZgIM26YfX2q0+AJgPtHxSt9vXMMzGqrowV7ldDAopsARabd/PHuXCuLa3qVUl0DEsVQADdRe5ebX7RG1vnjiygVXKnUAVE/wDb/jHqvsdngqlPBqODYlSVBJO2r3riRHl64jr6myMHY0cl49j6j6s7TqSq08w4C76fEArWtO1YdMVT/ihUR8xkURpALSRcQz09u5sbeY74OyfFaVPM54iqwL1UVVBDD/7WiJ0kbggjcHocIfaXMKc/kjGsqUZhMyBUBF4tOkmLwIGHWtH+P3+4yWS28FnxFDqWqTAZXkEAAFQwgSOp2JB88Wt65GkFdN4ABnofLtgfh+apkCpURUcwDO4MDbsIxvP19TU9DAnURP8A2NJHl/OEi4xg3GXI3LpoZUnnEjmLnCT7e3jaFIlUJIPaVHw3wRni7AEEgC/mTsPriq7XthVWxXp5Ja1ZGaDZguqdrT18pGK7neHBU5hBZmJcGAdR94+gPynCP2sz9Sn4zamH3aCJMT4skCfKd++LN7NcVBoLTzA0OFEyLHVJG/WAfljPKtXLdX/ePdlf4oF4MzBQ1Ri/KrTck6pgrBlmNhHkYnbGeyb6qdapUZQtSvXhAblTUKnrcCFiAI+OGeY4calJUo1dIGkqR+EWMCCOlvSbjFP4XwlqeTD1tV9QXRZkU1JZ2awF+5/w296cbom0EtxkErUeG1tyvpMJpVAeZwoYh9XLMiPOcaz9Q0srTjRGYbmLEFgtRiQ3XTGoST+XpGFmTpOmSqmm8hg7oGkxLEUy28M5cFYNmBmbwr4hkKlPLuXqMoFamqgnmJsSZ3gKgAm8g2GM7bc7r31ObpDbNcBpsgekyFgCTTJOpkAbSYJvqF9pjT1N178KzSFoRyqKSNUjlF4kWJA5o7X2wr9meLOlVUairhzpVmILAHfTLBT7/wCI9Z6QbRT4tmA5oVadQOZ1MINVqZSWhhKr94CeaIUrAGKfDTWQbgbhGedGosGZC4IQADS0nctcjqIgbAzbBeWWtmswEYtDGXYyeUWheu0j4z0xrg2Xq0ckcw9UPT8MOVK86yikMpJgaSq2gSszI04s/sTmJoCT94wDsIMIHuqAkGAJax66rm5xTS01uSbx3Ctiv2q4DTdGp61pEqTre7F0BYAflWAQR59cedZDjy06rNm0bxKFE0kpEsS9bWZ1Ee6JZtQm9wOgxdONVTmUeo9F9CMNOhyWnUDU8PTKsQqMZgjY9zjz32T4vTPEmzNZjpVndWcayGJimzxEkAzNrgHFYKPNYDdFuyeXfL5QLmIR3cu4ZZKkgaYtykixv5DFxpceo0VZKVFktqI5W5QqqGUq7WgL0NzhH7acTQuinS+qmjllggai2nULxMBhF5jDyjTU0V1EEuYimCt5RYaJKny6MxFwMBboydM5uyJuKUHpoigswXUFZRqNpmQRaB6264o3CK/icUrIDFqumDHMrdN7QGt2+eLRm/ZplPihfF+80hJLMYF5tIBINwbAj1FE4KhqcVpwNJqPWJBEgfeVpBU9ABHTb1w1N3aOtpF7qcDqEzrD921hJPXlKki/njMEZ/g8VGAdmvuxZmJi5J1iTPkMZibhG+A2eG5vidRol9AAhQJsvUDfpiCjlxGspqpgjVJvPNAt7skGJ7HDDhfBqbx4tQatexYQFCztNwTa3Y+mN8RWnTFXwBUJKRBKkdGEkC7AjYdevd9yT2xIUQez9YoodXKMugkxLRpMkCbrBOxkye2LJWyFVodAdRYsyyklWU6tLKoAtIgTEbNfAfBKrLUD/dxTpBEBIGzfi72YgzvrHa114dxHJuKMrSQQAzKywpBBXqCpn1EnrfGDtWu1K0v9KxRzwPI16bqtWiqjSVFZHKkXbkZAQDNhMde9hYOCZcmlTzTqq21aiY1KxkiozbwG737nCunxpPtRWkwdSYLNUK0iZlosb6GiRuR6yJwfgVHQlZqoAgFwWnVYxaAVCiBG/LjHb2vfjiq/7Y3kWLjnF6dWpw+rTH/51OSII5qNZYJUm/Nige0an/mfGGYQlTKV0Uzu9KjlnI37AHzk+eDuIVTTqZc5arS0NnaTgC2jQj7qTOmGIMkczYS+1fiVKOaqmoDWHEKiwDJek+WFJyoEgiNIkW3vYY9vsPaHOHzf1XUnLBVvZmrTWqxqWGgxaeYukDytqvhzwvLa/GYwi+I9zYiyWHc84taBfCXgWUBaqKoZR4NTTyEy4WUHxPXyxbxlwcxmAGPhs6uDUaDPhU9TSLb6hbsMJ2qSTdd34BEqGdok+MYJ0PTkgGLqwBJNxPScen+yGZNLwjrDa6aHlIPM3uqxjlEQLkQdRm+KLxLIMauaCqzglCr3vGktFhq6j9sWj2VQqtHWGOnekRy2kSQRIJF8Zu1NT0l6f0ikUWLJcIomvmxWUHT4bKoggE0lFgIHYCe3wxJmclSTM5bUI90QIEc94j+2wwy+QHjZisobQQkbi2gCL3MHc9Iwl9pMwPtuWiSoUaiJIkMcZYybnz0/wqsDLiuYYvrgqk2MySLfO9vn2w74RmORKh3Lqo+NrdsL+IZQvC9rHe5t6xEiJ+tziZ4D5eiLc7H/AMEJN/XE4ytrvHjxbIspmZ4rVpgzyRv10o2/ri5NU+71RJ6ep2OPNOG5uOM126Kpt6UVx6bSSEA6qov6DfHpwWcdxKTPNfalpXN0oJ56K6j1ZaYY/Mnr2wRQzTUm0VV1ErCkmdMrzKCbqJPphV7XZhl+0kTD5xFnpy0pA3+PoBg7M5LxKRLO1MhjrgbsFhdoG/Tc4x62pt226V/4hnksXspmtOTSsGdm8OWBECyA9fIDY9euMpVTXy6lKhCQNSzaxmI8+2KXxP2gNHJLT0A1BlwmpXJ0K6jlYCxIB2MxynrjXCOPsMpTUe6KayTfSQACZAkKWPmZAGxnA1nPYtvF19eToSXDG/FuGVKFOiE94lWmmOYeFDBuaSTrCeUT0NkHtfm6qlKPN4bhalwCRCrfVBKkMpPKxAkeeLXwrMU8x0JKoJ2sTJInbphBx7hJJhOxEgkAgxyyT7v8YXS16nUhpad8CnQy0qdSiKgVYBURyPAeZvvNpsdO1sWHLe1IXL5io96ppMlMlCJqXABb3WI8r2je2FXAvGSUZZWYAUQZJsY/Fg3ipH2eo1plAV03GqrTkntboY6d8aI6slK338kWiw8b4pro5fL06TSWVIMEGmgDVFYCSAVphZ/34l4FxEp4jaSpciVVpVYLXl7gk2IFvTFZzlGqar6V5qSATPu+JzEXnTZVPe+BmzbvReG0uCSxsZBHN5m8bfmxWOvKTUm/f6EeC4Zbj6BoSgqUkR6rNIk/gQFAJEqxPWfnjyr/AIX8SCVszXdEZYVipiZNQsAo0kRYi0RaJ2w+zdRfBru4PKhEEspbw0LTpmQQX22k+WK5/wAP6WjL5itEwyLGqJ032i/vnqP0xqWq/guT9AdaLrmM1ka9dqtNAtUtenUQstQEBZSCNMICdtzcRGLjw/gaZOm5p1LNVpMTYBV8RSQBJAAE9vpim8D4jSZiHp6XKzLBShgbqwMETPywfnq48KkJOhymtd4bcHzGoRfz+EIa/wA2UNRZ0zppNQRtSTvy2LQZYnruZ7demPGvYTP1H4nrDhX8Ku2oiwJLNtNgSfri1cV9oKmUlnd6jG6wSxntB2m4PTlGKV7E1PDzT5yq/hkatKk3ZnMm0XA/WO2NGnqXBy+gHzR6uKuZG6iestBnqSIEemNYo+Z9vaZYktUv+WmI+t/njMZ2tTuY1oo6Hbl+mJhVPYfz/ZxIEPp9MTU0mBN+vw2n+cUtMgQLWbbb4D9cdmq2+r64lAWO8H+OvzxJSrItxBBsB+/lEf8AvbCegSJKzfmP1xKiEn8UnyxJSzgWSAGt2EdbzH9j1xv/AJhU7FbRI/vlhJRl0R1oly+UJ2Un++WDsvwlyRKAT32wAnEKiizNJ7zM/wDV52xK+armzuxv1E/3riU4avgMmhvS4eqg6kpkgx70euxxK+WXolFfmT+t8K8rlqjkTLAm4mD6ybdMOcpwGoTB0j+/364zzW3LkOs9DjL5JT+NfhJ/bDWm6pGk3746XJrTOklfWMC18wo2Grf1n0xLc5eJRUjnMZxjbW3zONpyiZufhgelLSSBGCKK6mH7G3p9cOp0uArI24LS0gv2/XHFTJ1K7crRffqO8YLeEQLHrbGqHEdBgEQRsVEf+Xx7Yyz15ZceSjSSoM4b7JBCWLsGMS1pPeTM9MWFqNQKQHY26kz+uAMpnGZSYv5CDv53w6RxiUO0SbywcHn3HOG6gQ1OxfWZk822q5N+k9sCVKjuGBJMzMgeXWPIH1E49BzY/wBs3jf+cL6vCqbTNM22ghdvOcMu1dJKwNHmXFkLjS4mzDaJ1e9sLnz6WwFQ4WAICsR0v6W+gx6HxL2cS7ANt32PT1/zitZvhVRRZmF/7t6TG+2NkO2RkqWCTgyDhee8AFdJuAJbcAKFEXjpvE74sWT4tTeAwI5QALR6/KRirrmCtnMjzBP7HE9Gon5oP9tgSp5aGjNotiBFIZYaDMN6EfvgLjbissCEMr0MEKwaCAD1G/8AuOBMnmz3EeuCaqBrjfywilT5KOpAi8SemlYQjNWd2Y6o94ABdJGyqAov0wrfMaoCoiEGRzeYkGbQYwXm0PX64S5vzHyxpjLcZ5KjfF6NWqjgizMxJBmNRE+W0DAWQL5amaS0xBYklgZkhRP5dl7Hc45do6kY5OYPVj8z+2NG+bVPKFOU4lWSAhUANIBAMHadu3TbAtXPViSSzSTJh4v0MeXTtg5qk9R8/wCf7bA9XLt2H74eOou4GRdVqVj/API8f9W562mN8B1qLz69oGGVSmRuMCsTjTHUfQDbAPs79P2xmDCx/L+mN4fe/AUiJbYqZHTqPX/OOqVF7EA3ufUTM/L5YbpVE3g2A9biRf5fD44JGYRWF9JAkSNxpvMG1hOMstfokFREtLLVCLyI/Qf39cF5fh0m7dJJFo7fp+2DzxBAw1xAMgja8xPf+/GZeJrYDcSY0jf16TA8vriUtTVfCCoojfgDJ7xBB2AIMyYm1sMqPCQG55i9tI9QJ+O/+RiCnxTYkKYXp+GYH+PjgapxOoxYAwpmxvvv9DiLerLDHqKH2UytF15SIDG/kD+h6H+cSlkQ20DT53gHoCYYx0xWvtVUiNUR06f3/GCaFFm9422kmf47Ym+zyfMvT3QyY+TiYIGlREETGxgiTadgI/xjqpxZhZSIHaI/TvhSquZ694mSfXAmZrgSF1A+d4vsTHb0w0dCCWBrGdXNsbkg9YO2IKXPI0zBFwf1wEhZhqZhPWFMzPW0fXqcMcugCyfr5+f74Z/L8otWE6zITT6wMN+F5S5YgRE2/jCTIU2fmAbQDYg22uCYjFno1VRNogEgk77dfrjJrt8LqVgupHmjMmY8sDZesZMAiDGxH62Pa2JK1VWZZBby3PkwMxFj8sZQVBc1CtrLMQBvPn0+Ixlkmo0zm7Y4ydUgXYXsANwev7emH2Wcx+2K/SroLAEqsmR0He3T4dcNMrXBuCY8/ocZ3Bv5h0d8XrMELLIK3EdYBtHWbYGp8YpzHMTAv+x898SZ3OR+Ek9T0Ajf674Fyudp1FDQJ/nb4x9PTAd8tAZJS4wjWIMwdQ3E6ojzMg79sBniFFgyQAzTAPUzefiLjyxM2bokEaRuNheQbGfgcbOTpX0qYMcsgSZm46b/AEwIuL5sAsrcOpN5SSSCbTB7X6scJamQRV1KZExbvMRucPavBQ7tz6RExubrpk28h39emIF9mwvu1ZtDahy9YIHef1OLxmovMvsK0Jqejaesb/K/9/fB1F1F9QHxn6/XEWd9nQxhXC22NzNr/r1wI1B6AB6oOaJgmQRvsY7fvi2+Ml8ssgVoeVcrqn8UdcKeJcPINhIxlHjLqQoZW2jpuOv1/sYc0uLMRzIpAMDz26f3b58p6kMsphlFzfDmuQLC8xt/ZwtqU4B/px6TmM5Sa7LBvIHU9iNvnhXnOFUjEDSWIgeu0fLr3xqh2t/+kSlpdx5+8zjgVmB32/nD/iGQCkgCACf3/wAYCq5QbQO1zufh542x1ItcEXFoA+0n54iqVpwQ1K8SLfG+IvCX43xVUAGZ77rjWJWo/wC0fTGYfdEBiMSTBHXfcyTHl8fljWbAJ5rMDtYG5Ej+xgALDyZI7Lb1vfzxIxsIE/LuPjinw6do6wqrk6RBKuQeq9ZneDsLb45XStwJPkI6neN8RGTYGPh6Y6pLt179sFt1QApaonl1Qeh/t8FZdBM3BvB/YjaMDig1jaCBttt9Dg/LL63/AH/v1xCeB0iWlQgzP+MFNVMEDHNRxBMafQmPrfEaVG/DBI6N/GIv5pFOCGpm6plAbG9+hHUHcGw63xOK1QoPFDEEch3BExIkgRqUiRsRjjwmcybEjp/PrhtwmmWpMjAMoOpD2LAageoU2O1iPM4MpYwdyQcOo+IBClSOu+/c9Njhn9hDIslhJPwiLWFsd5ZisqYIB0ny2kHy3/pwdw/mEuGAA69eu/TtjztXUknjFFUjWVya0xIaTpNpJmNx6zcemCalQ1FKwG3mJnpY+V/pg7L5ZRSNxEdb2sBvft8TgOpw/wAObiDHMWtq3PrF/n8MZvjJq3zY4HSrNUISyEHY2teY8p/fzgDOcLq6i7FQpJvJtBUmbf7bA98HUnDIWSnLFoDC6lQfeYm4HveQjucdrQILVCWJIYslgCBqI0x164MXsk6x5k+TMu1WkFHveuzACBbpIj4nFhoZtjEabwTc3noN/L4nCsgv92yBb2YwFjqZHx374Z5XJ6VVQymTCmbGNxb4X9cdSfzNfgpEizmbKqQ3xm4PSPSMKc1mabUiF5GPa8RO/QgibeYw8zlElWBQFgTpB3M7C1onvgWplKigs5AYgfhFgDYA7qYtAPbti2zTjC1/QZLJ5xms7mKbKJaNREiRzajueu4xYeG8TcPodSW7C+3+3rMn1wRnKAbSGe8yRy72iZsPeNztYzc4WVuEv4hJJjVynrEiCItbtbbFlOGqqdLn1I7Wi0ZXiCExcPE2HuzsT8LfTyx02ZqM+gTpNrmJPadt5Jv+HCllhwXXUdIDAG8xNyN4YjcbgHHHiVDIIYBlMNYyCGt0HczI6Wxieh1VeobCP+dVX5PAIGwYCxLXMtffvYeuFhq1nqR4cgkxzH6LN+UE+kbY6ynGHjTUXXIEXi6cu/a2/n54Oo8WOttEQDAi8coDE+gED1+Vo3Bu4IW/EAzXA2n7vljcMOaexJMkzNh8hjAjoFIVSomNLEyLbt1Fx23Av05HElYaAp07F2ud4Nh0G9+hN5BwWM6Vi5JCAMN25mkQoHNZZ3m8nyo9y+V+/fedgIyVdAp1CZnr0Pl0iRgtMwhazENH/jMxB+J88V+srMF0EsNclphosWABEx730wVm6Ph0zcyW232kb7SP3GJtU1nI6YyGUpiSCS3c36RMbT89sJszk0IbUAQp0gCJBNyQLbKDjtHMA6xpsLSW22Fvj2He95kg6jN9w2oBjIjrdtzbaAPPDqEoXbeTnTEVT2alWbUBvpBIk3ECbfm3ja+E78Je8FSAYDTJex90eQ9MWnMVAYXWrCSIIBGmCYaY5ZA/943VzooUiPe8SIELpHYkkWkdLR8IxfS1tTi8vjyJSiiksjyeRsbw5qTPMKYJvcp1xrGzdLw+om0qSVgfI9cToCbAE37f2MAO8xG8R6+vfB1KlAuT542yJJE/hAybyO3b/GJKOW7XG8z+24xxSBHfBuWZSRaZ/jf+74i5UOkTUKSjbv3tg2iyi04GK7BiB2vI+eJxTC83a2/r/j54zTljJVHIrAGAJB8p69t+3ywwfSIaNV4IGy9bRbYzvhNQzBJYRNgb9bdPUT84wxzDlQocaSQDDAjpIt5/XAkneP2Cx1QyykyCswZiTNzA8jt9cF5ekEJ1KoQgATuJF+l7gfI4T5TNeGXJ0wAAV1C4JO15MSe/ng98+CaSiSGEXE9QGEdyDIPc4xak5xfn+yqwhlQVHUzJCNOmTeIvbceXphjTy41I0kdogLsRBjreZ8sV/I6SvPGmVUFf/wB5nuZJ/wCkYbu2hlCywNla4hbXM2EMI/oxkmpyk68fuMiSvxY0VI1L5RNjB3kdh9Rjdev4w5IJMzLadUQDBFrgjr8r4W1qLOWonSKicwqKROsg8pYe+CT1uCbGMRvka6IGLwyqeZWWFJHuvRYgkwSNomJ640rRSzfHP0BYyp1k8E5emKc+I1OHYKCoTcSZJkgWk2M746zGaqUQuulCQugk7Ai5IiSvT4YrOWrulSHLiqdLqWEamdAqKLSpLQdtlPbD/JZtKvMwYFogkGEkMoEmzA2aI3J74hqaMNO90XfLd4+lAi2wutxhW00yH1MAJZAqgETHvG8R2P0wVl80gAYKQVkiNhtuL9xfzwDU4ArkOBAWdMkC9hYG7AQTuLn0xmXBJZS2rVpjrERvI6Agf5wz2OCUUqrOPfQpFZH+XdY1gEiJMxE9e04RcTzoaUZDOqzCSQbGOX956xg373SIp6lgkEaSPiRIB+WE2c4g9GCiIQ5iWFom4DSCIgiMWiknhL6fsM0BZvL0ydTTEgKYvIuQR+IWwE5NJavPGwU/huABtv5ny2GDKGe1XK01kGyloNyv4mPUR/3YGq8So6okTAg6RpEHvedug64aMXKShzX5XkSk1VknDs1UIMlGYWXmAg3BGncbm5tfG87xIq5psbQAw2glWuO4g/vjZqUdem2tTc/hnSJkxtt8sB5umHfW4JIABA2AFoG9tj9cd8OGpJyUawDoSU+LI2sMg1oLgdWHvQf09fmHxDO02WmqoxYHUd9xMDUCQAdr/vOBzTQKQzAa1ISBIBEWeYOra9z9MBZbN5ihq009QYDVqDREWgiIM3HUfE4tp6Kje1el+nJOT7xrSpN44FSQx0guCdJ66dtLX07gfI3eVKZWmJUgl9JAOksYWHJ6jTeelxbFNT2ozDKSqqFhhqIQQCSSByjU0mJMkyO0g2tx96lNKLOdQAaFHvRMTe4ggwZ2FuuG1ezybjlePh76gUq6DKhUYWUNoABJJBN595gL9he0RfDTN1VViKhiFBFpJBGkAC+/Nb/bOFGVzGXJIeiNbGZVRDMFYyGUiCS7EgmOc4M4hnAzlYLGdgYiBbURcgSZjttjJq6cnqrHTw/IyZwhBWIBXUSO+xkjrvp/xbG1yJHVeYefKbTAv0A9ZwGuaREem5iTvcCGmYB6TEdJg4aUDqioZUGJFxM3iZjrB8xiUpyh5FEyBeGaWUqCFUiTPvSolgDBIJmB5dcTSGVjAaBy6gAbAXb8MQZvMaTgvN1QbqxBM2iBaxJH9+mBsxldYIEiI2/ENLT0Np/Q4V6i1MyGopjiipIYGZN438/jv8cZh+OD0j7zEHto/wD6E+uMx6Xx4d79+hPaefU0kkkCNoHT498TqCLb3+n744pL1j5YJpON7T2Plj05MgkTUaAYEyRA3EYJWgGgAQ0fMgTYzgZqxaXgb302+nTG6NYHpbeLWv8Ap1xB20MMvtCqZ0yQPSD38zvgXiOYEEydUfp2/u0Y3mqwLmB7sxJsLm8+e/xwszWZJAHvAXE7D49PTC6UNzTYz4CqGbACiLiYvECSfpf54Mo1tY/1exCmRJMCBAIBi87W3wnydJ2mFJgTtt5/r88O8rlE0CH5utp+fb64rLTSZ0TebOkQBLd9gNoMkX2PY/LEdPPPuJLSQYFoJBj1nBWTyq/eISCGWFHTVKwfiJwTmculJmQqA8Ah41bDYQYgzMkdMZ5Sh/FoY6yVeqHVXUm+zQL6fPaxxa4JpCDo8NjLagVv3Kgwo33uQIFsKckxXRVVpb8W56mZF97iwGDKlR1UtTWrTJ066lydXUggAhZ8z+2MGoo2sLp7oosIWZrOKWRRJkwwFw0EktAN4mR6YXcazlRAVDsdS2U+6F1kWGwi3aZY4sq0no66dVCXIguGsVYyRtMfycI/aCrTNVStNvDE2ZhtJkaoEA37HFNHbuW3j2/wJLgF4KDAKyNQ51S5GqYd7wsi24MDbu4yq1fCilTLoDpKohIU0yJB03AuTE/5Zey/spIqZjKCmVfUqTWbkmZVl0xUEEDcEG+NcT4bUpfcuXWF1Au2sN1IETCrt3tJGK62mr3vjyOihcPaYsVUatJiQBv5GI85+OHWVzVEaEVrDckEgG0nYn+IwB9loomlnKLUYnWFabKvKJWOaTsbdfKPIv4LMxOpS0CRJ3Gx2G/bGaMNOsJruXf/ANKRuy35oaBaGEC4mDteCT64Rcaps+wsFBMsIYyd+nr1v54Y061WuA6AaVBGinuPMqD1/e2BuJuIIftBtadV5H/aMS1NsZJwTopmslNydFncqTpOkd9heAAJkgH498D8UoMo510yRBaVAk9VvPTzHn0srvRdSVkMTckwNMEW6T2Hb0xXuJIKgKBjYHSJgGYPx90DGyEtzT4M8sICVWcyjqx1EeHBkeRtJNh3t1w1oisOcmJ5SGIDSZFkeC3a0xOB+HcPqVKmimC5VQQqXJawJaLiPPHGZSstYrVEEbAEGCDO4kEz3P6YrJKawugt1yMxUqqoOgrESdMAXBDL8ZuO25nBOapklQT73a8wCWgKOnpF8L6ObBUq1aZnlHxkmdzvbBfFauX0qtGpUZihLGrCgTEA6TImflEYzuL3KsUM2mgIcBQTUWqBpfoZ0qS8nT3It5Wx3VzlPQwIZtQkmTc3BMjc2t2nAgSpTTUFDgEamUFl3tB7HzwNmc2GpwgKGZ1QNwIt1AsJGH1NJuX8r98CdAKvxcJUU048OY0kwJBEgj4C8XEeeJ8tnKdQo+pjzfeao5mkyVAggbRuZImN8LqGXBOlrzqkqv4iNyCRv69fM46z2USnpKPBEaZWCALiQBuSSbTYjGrZFYXP7J+ZZ14jlq9QKi6m1B5a1QgRyIBICAAzNyIvhrkMi9YN4Aar4bsCdQiQBEEkAXHXeWM748vNN9XKCGE/GBJHrHTBmX4kVaAsGIvsSDIM9DJOJT7Ju62vfv3hlMvPGKD0xPi0wwBGkMG0gXg6dS/iG56jvgfLZ0qp1PuAZva5kbTuY6de2K5mcwrpaRJAiAeYgyOluXp0+Qn4dmSygEA35hYCO47/AExJ9nW3gqpZLElJqg1kQT0j+cbwwyNaj4azMxe8/XTjMY3qSTpL+vyOeZUKgXE7VRpgASf7bACU294m2DhQBiLjuMe66TyZjqnliwlQTHb+3wQKbKPdFwbkTv0ie3WMRltMKt4HxwPWcnmDTG3liSy/AIxakg0b7CQTP/oY6q6jBsFMCCNwMB0MwX0ztuTO+HOWQNp1mCIAj1wjns5GWSPiD6UQ0Cym4KiyhSLnVMkn+7Y4Wg7qrAqgIEsxAvcC/mIMnBK5OqdXL92Gu0WmbY4yaDxDSaVkiJEjz+EYLdRvu/ocacMzBpUfvNOkSFC3DLJm+7ySSJPXC2lm9TSAAZ26RNljHftGQGFMEAKMTcFy+VZC2YeoCCP9MD3Y3uL3xHShui9WX/o5chlTjVaomkVCoBC6AQo0xYWiY853xLSruBUKu50gSttLLNwSTY9t8E16PD1olaIavUYyrPysJgaSBHmdsK83w0rVNJRDggt1XTAIPeb7YXUUeKv7jjKjx/Ms6VdAdVY6WMApIgmQJ1R6jEXEqrOBWZaYJZRqeSQBBG8ztuR02xDm+LBCoOmBc6eom1vniw+zNKt4njGmSoUvTEi4AMG/STiMdyailSXn9BHyVNPaKotNqaBwrMdX4eabMomxJHTznDSnnqjBspUJqqg1LoIlSQG98gmJ6d8RcYztKrVH2daSVQrGo6ggs7XYMIuRBAjucc8ISuwd6SuWZY5UJlR1npfqcataUttRX7C0rsloZ4oStRj2UEahMRczymOvlthjlKZenLeGpjTIZVloF/D7EdSN8R5Dg5HiJWp1VYlSk6dIMydbTI+GGub4KgiSTUcToXTyieu2M0o0vIaJLleHCk12IcgHTb3ibA/lmPXA3FqyKjUqgIab+u/74Lq8ECzNY6hB/N8CZtHnjnO8Ny5oip4lU1CQCGKzPW0bdr4WGmpso3gpVSoDO1gVCwRAvcHa3ngHMNUDB2Rjo0ksVaLxAn9sPc/kfCbRVUhGMzaQehn9sOcxlM5WpItSutHKkgB9SbAdAIk269ca4RVtIjLJWhQq06X2lFdVJgsOQEk7SCCSI6Yk4t7SI9M0ab1IWw8Rib/mXVff8xJ3wo469GjU0Zeu9ZFF9X5+pUQOkYrVfMMRMAHsLYr8OVbSbdFhSszgq55gOvW1rbnpgWvTMSSrMpjr8/XA+TJWmHZoPVRvB6zieV/1BYHodz6YVadM6wzIMYUF4kglPMGCT5XxrNtSuFgMJ92YPwJMWGOqarUjm0kbnuBf64jzeU1CUnSLMfU4mlbsIK9cQCW5/wAI82gD1xPlHQzrIBLfK0ahPQdvIY6z3Az93FVNU7E+729cIc/lGWoUVlZljY/PFFpxnhMSVpjjM0Epkqp6EiNiWgEt3PlhNlaJqMwRSCFOkfGPnfHfD88WOgiSRAgXk4dZJKaqQygv+EncMN1PcYZKWmmnyDkTZQ1UuUaQT8wI7Qd8P8iko2pdxKgDbTO/bEOTz7DlIIA3FyDcd8LuJZwhjpMAn0F/IYSV6jqqYywi5USNIgnbGYquX42qqF0i3njeML7HqXwNvQuRD+K47Y6XSCInEa1o23wNmcxJ3iDsMesotuidjisgJEm5tbpiA8MccqXAvPfHPCKzOzaQbDBtJ6pIGkid56DEmpwdINJkC0IIF2fZVXvg/h1VkbmYC956RiycBpcO0MatR6dZByNO7QdtwfQ4QoKTFzWaZEiOp74WUbVSKJUW3L/8QaCU/COVWqIgyQA3rY4qOezyVKhZU8K8qBJC+QOE2ZVEKmmSQd5wZlCGgfM4aUVXgc3bGnGVaoyVdwygAxYkYHrZ8khSN4Ext5DBSAhomUUWHQTiDPupCsFEixxONJKNYG4HlH2B4kHWrTppFiB4ig4G4rmqtDME1qTJVHvSfeB6i8G3Y4O9mvbjMU2NMHWCOUE7EdRiT2i9qnzWXalmMuFrIZR4g/Ce/rfF5aMWk+oqlTEXtI2VaqDlX1KVBYFdMN1GwnDfJVqtLKT98G6QYVU7SLjFUyeVLMNNz2G+LDlajvNOo7opsV/xiOq4rDCu83wbiL1sxTfK5WhRekLnZagG+vuSCb4s2Zz1UFl0/ZW0iQjWg9RtPpinZ6kMsn3TMSDuevbC1OI1ajtWrVC7AACfLYRgXvTaO4H2S4ipqxVqMzhrHUY8rdMMc7nyGUb7Q3WO04o2Zq66hdRHfD3INKzefPE32eV7rx3BjIsrVSJLEw3Q9fOMEZnMg0oOxI+mEFLmMs5NuuCMvm/wnbEZ6bi7RojTR3UqswPiM2mZmPLFa43lgEGhtQkmB+46YbZvNG/UYU0MxTEs+qfw+vni2nGluXJCfNCRKTAbdccaDI6R074Y5yk+rXTBK7tiKjQNZ9KyJ38salK8kKyBMZJ7dpwy4e2vkY2GJX4C4FoMHfHeWyh1bQThZyVDRi7OqXC3DE07gYs3A+GV6tGoyooRBzM1gYvA74T06tSjJUx0xxxv2vzLURlwwVI5gojV6nEdinSeSj+XIq41nAWK+6y3Hx88D0ayF5gEkX+WA6+poLXOMo5R0cSLRvjVLT+W/Ai3bG/Bnp0iXuCQRaOhtGJUqhiW0+9aZv64gpcPBUnUB2xHVYpA39MZ5pyyHgIzrwYwqztFWQ7zPbE9VmJULJbEeZD01IcEGZvh4QcaA3YlrIZMC2MwcGm+N41fEJ0K0qGbY0LsQcZjMWOGPCOIPRaRHnhnW4s7vvbyxvGYhqLqOu4GrVOmIsxmYIjGYzCwim0OS0XMeRxPl8sYNz3xmMwaQ8VY54bQdltF8QnLt4hQi+NYzGaTy0PyLczkKtMlw2nSZBBuMXPh3tyBl2FSktRmESRH7Y1jMFNzSvoyTxwUnhvFzTrax7wJIHT0w84n7Ymu6EoFI3jrjMZjTqaUW6YIydBHEc8KyiBGIX4caa80XGMxmMa+XCLtXkX5flbyx6lwL2Uo1KQqmqwBEwB++MxmLrLoRpFfzWSUVCqEkAxfEIyPNpNicZjMYXJ7jTFKgzhuXpI58aSon+nCniOVpsS1NYEmAe2NYzD7sknFALEmw5fQ4IyVJla0YzGYVukxKCK9SRe2FRzYDemMxmDBXdnSdAeezzMYFhOBs1e3WN8axmLJJVRK75I8vR0kE3wayzIBiRjWMxWTtHLDFv2g7E7GMGDP6F2knv0xmMwXFNpE7N0eNMskKPXA1fN6wWqEntjMZhopLCOTbINVHscZjMZi1HH/2Q==")
   }   
   else if(tempc < 25)
   {
     $("body").css("background-image" , "http://www.almanac.com/sites/default/files/styles/primary_image_in_" + 
     "article/public/image_nodes/winter-solstice.jpg?itok=Pvf11DFE") ;
   } 
      $("#tempp").click(function( ){
         
       // alert(count) ;
         if( count % 2 === 0){
              $("#temp").html(tempc.toFixed(1) + "&deg;C");
 
         }
         else
              {$("#temp").html(tempf.toFixed(1) + "&deg;F");
                 }
         count ++ ;
          });
    });
  });
/*  $("#temp").click(function( ){
         if( count % 2 === 0){
              $("#temp").html(tempc.toFixed(1) + "&deg;C");
         }
         else{
              $("#temp").html(tempf.toFixed(1) + "&deg;F");
         }
      }); */
  /*  if(bg > 30)
      {$("body").css("background-color" , "blue" ) ;}      */   
});