import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {
  greeting,
  formalSocialMediaLinksHome,
  informalSocialMediaLinksHome,
} from "../../portfolio";
import { Fade } from "react-reveal";
// import FeelingProud from "./FeelingProud";

export default function Greeting(props) {
  const theme = props.theme;

  return (
    <Fade top duration={1000} distance="40px">
      <div className="greet-main min-h-[80vh]" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div className="">
              <h1
                className="greeting-text sacramento-regular"
                style={{ color: theme.text }}
              >
                hey there, {greeting.title.toLowerCase()}
              </h1>
              {/* <h2 className="greeting-nickname" style={{ color: theme.text }}>
                ( {greeting.nickname} )
              </h2> */}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <p
                className="greeting-text-p2 subTitle"
                style={{ color: `${theme.secondaryText}C8` }}
                dangerouslySetInnerHTML={{ __html: greeting.extraInfo }}
              />

              <SocialMedia
                theme={theme}
                socialMediaLinks={formalSocialMediaLinksHome}
              />
              <SocialMedia
                theme={theme}
                socialMediaLinks={informalSocialMediaLinksHome}
              />
              <div className="portfolio-repo-btn-div">
                <Button
                  text="Work"
                  href={"#projects"}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              fetchPriority="high"
              className="myimage"
              src={require("../../assets/images/umair.jpg")}
              alt="Umair Jibran.img"
            ></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}


// TYPEWRITER EFFECT FOR FUTURE IF NEEDED
// import Typewriter from "typewriter-effect";
// <Typewriter
//   options={{
//     wrapperClassName: "sacramento-regular",
//     strings: [
//       "Hello World!",
//       "!سلام دنیا",
//       "Hello Wêreld!",
//       "!سلام نړی",
//       "Bonjour monde!",
//       "Привет мир!",
//       "Helló Világ!",
//       "!مرحبا بالعالم",
//       "Përshendetje Botë!",
//       "Ciao mondo!",
//       "Hai dunia!",
//       "नमस्ते दुनिया!",
//       "Olá Mundo!",
//       "Halo Dunya!",
//       "Helo Byd!",
//       "Բարեւ աշխարհ!",
//       "Kaixo Mundua!",
//       "你好世界!",
//       "Hallo Welt!",
//       "Прывітанне Сусвет!",
//       "Hola món!",
//       "Pozdrav svijete!",
//       "Ahoj světe!",
//       "Hej Verden!",
//       "Hallo Wereld!",
//       "Здравей свят!",
//       "Tere maailm!",
//       "Hei maailma!",
//       "Hallo wrâld!",
//       "Sannu Duniya!",
//       "Halló heimur!",
//       "Ndewo Ụwa!",
//       "Halo Dunia!",
//       "Сәлем Әлем!",
//       "Салам дүйнө!",
//       "Sveika pasaule!",
//       "Labas pasauli!",
//       "Moien Welt!",
//       "Здраво свету!",
//       "Hei Verden!",
//       "Witaj świecie!",
//       "Salut Lume!",
//       "Здраво Свете!",
//       "Lefatše Lumela!",
//       "Pozdravljen svet!",
//       "¡Hola Mundo!",
//       "Salamu Dunia!",
//       "Hej världen!",
//       "Салом Ҷаҳон!",
//       "Selam Dünya!",
//       "Привіт Світ!",
//       "नमस्कार संसार!",
//       "Salom Dunyo!",
//       "Molo Lizwe!",
//       "Sawubona Mhlaba!",
//       "გამარჯობა მსოფლიო!",
//       "ሰላም ልዑል!",
//       "Moni Dziko Lapansi!",
//       "Сайн уу дэлхий!",
//       "Scots Hàlo a Shaoghail!",
//       "Chào thế giới!",
//       "Mo ki O Ile Aiye!",
//       "ওহে বিশ্ব!",
//       "Γειά σου Κόσμε!",
//       "こんにちは世界!",
//       "សួស្តី​ពិភពលោក!",
//       "ສະ​ບາຍ​ດີ​ຊາວ​ໂລກ!",
//       "ഹലോ വേൾഡ്!",
//       "မင်္ဂလာပါကမ္ဘာလောက!",
//       "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਦੁਨਿਆ!",
//       "හෙලෝ වර්ල්ඩ්!",
//       "สวัสดีชาวโลก!",
//     ],
//     autoStart: true,
//     loop: true,
//     delay: 120,
//   }}
// />