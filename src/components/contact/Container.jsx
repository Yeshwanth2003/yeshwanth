export default function Container() {
  return (
    <>
      <div className="contact-container flex-jc-al-c">
        <ContactBox
          title={"ADDRESS"}
          desc={"9/66c police station road, Devala, Nilgiris 643212"}
          icon="address"
        />
        <ContactBox
          title={"CONTACT NUMBER"}
          desc={"+91 9360195496"}
          icon="contact"
          isNavi={true}
          naviData={"tel:9360195496"}
          naviType="tele"
        />
        <ContactBox
          title={"EMAIL ADDRESS"}
          desc={"yeshwanth.rmm.8@gmail.com"}
          icon="mail"
          isNavi={true}
          naviData={"mailto:yehwanth.rmm.8@gmail.com"}
        />
      </div>
    </>
  );
}
function ContactBox({ isNavi = false, title, desc, icon, naviData }) {
  const Elements = (
    <>
      <div className="contact-box flex-jc-al-c">
        <div className="contact-box-1">{SVG_ICONS[icon.toUpperCase()]}</div>
        <div className="contact-box-2">
          <h4>{title}</h4>
        </div>
        <div className="contact-box-3">
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
  return isNavi ? (
    <>
      <a href={naviData}>{Elements}</a>
    </>
  ) : (
    <>{Elements}</>
  );
}

const SVG_ICONS = {
  ADDRESS: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      width="50px"
      height="50px"
      viewBox="0 0 100 100"
    >
      <path
        fill="rgb(225, 191, 0)"
        d="M49,18.92A23.74,23.74,0,0,0,25.27,42.77c0,16.48,17,31.59,22.23,35.59a2.45,2.45,0,0,0,3.12,0c5.24-4.12,22.1-19.11,22.1-35.59A23.74,23.74,0,0,0,49,18.92Zm0,33.71a10,10,0,1,1,10-10A10,10,0,0,1,49,52.63Z"
      />
    </svg>
  ),
  MAIL: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40px"
      height="40px"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z"
        fill="rgb(225, 191, 0)"
      />
    </svg>
  ),
  CONTACT: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40px"
      height="40px"
      viewBox="0 0 24 24"
    >
      <path
        d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"
        fill="rgb(225, 191, 0)"
      />
    </svg>
  ),
};
