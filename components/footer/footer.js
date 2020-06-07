import React from 'react';

import designByImg from '../../assets/do.png';

const Footer = () => {
  const designedBy = (
    <div className="flex items-center justify-center">
      <img src={designByImg} />
      <div className="text-sm font-normal ml-3">Дизайн сайта: Данила Охрименко</div>
    </div>
  );

  return (
    <footer className="container text-white mt-20">
      <h2 className="hidden lg:block uppercase font-bold text-center mx-auto px-8 mb-4 font-black text-4xl lg:text-6xl">
        In chicken we trust
      </h2>
      <div className="bg-black flex flex-col lg:flex-row lg:flex-wrap p-8 pb-0 my-rounded">
        <div id="contacts" className="lg:w-1/4 font-black ">
          <div className="block lg:hidden uppercase text-4xl font-black mb-3 pt-20 -mt-20">
            Contacte:
          </div>
          <div className="text-xl lg:text-xl">
            <a href="tel:+373 78882 025">Tel: +373 7888 20 25</a>
          </div>
          <div className="text-xl lg:text-xl lg:mb-4">
            <a href="mailto:info@chicken.md"> Email: info@chicken.md</a>
          </div>
          <div className="hidden lg:block">{designedBy}</div>
        </div>
        <div className="h-2 lg:h-auto w-full lg:w-2 rounded bg-yellow lg:mx-10 mb-5 mt-6 lg:mt-0 lg:mb-8" />
        <div className="lg:flex-1 lg:mr-20">
          <div id="about-us" className="text-4xl mb-3 lg:mb-4 font-black uppercase">
            Despre noi:
          </div>
          <div className="text-sm">
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout.
          </div>
          <input className="rounded mt-4 w-full" type="text" />
        </div>
        <div className="lg:hidden h-2  w-full  rounded bg-yellow  my-10 " />
        <div className="lg:hidden mt-8">{designedBy}</div>
        <div className="mt-12 lg:-mt-4 lg:ml-auto lg:w-1/4">{footerChickinnSvg}</div>
      </div>
      <style>
        {`
          .my-rounded {
            border-top-right-radius: 50px;
            border-top-left-radius: 50px;
          }

          .logo {
            cursor: pointer;
            width: 150px;
          }
        `}
      </style>
    </footer>
  );
};

const footerChickinnSvg = (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 316 255"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M288.475 144.886C282.945 117.865 269.622 95.2415 248.131 77.7715C223.622 57.9135 195.469 48.7387 163.923 51.5037C140.546 53.5146 120.059 62.8152 102.086 77.8972C90.5236 87.5748 81.3487 99.012 74.4361 112.334C55.7093 148.783 57.8459 196.04 85.7477 234.499C87.6329 236.761 90.0209 239.777 92.5346 242.542C96.8078 247.193 101.458 251.466 106.36 255.362H310.721C303.306 218.663 296.016 181.837 288.475 144.886ZM206.781 206.848C181.895 225.198 146.83 220.045 128.354 195.16C109.879 170.275 115.158 135.209 140.043 116.733C165.305 98.0065 200.748 104.039 218.344 128.422C236.568 152.553 232.043 188.122 206.781 206.848Z"
      fill="#ECBF08"
    />
    <path
      d="M59.354 37.1757C59.9824 36.673 60.3595 36.2959 60.7365 36.1703C68.9059 32.9025 77.4524 30.8916 86.3759 31.897C92.7858 32.6511 98.4415 35.1648 103.218 39.6894C103.469 39.9408 103.846 40.1921 104.6 40.8205C104.474 39.061 104.6 37.9298 104.349 36.673C103.469 31.52 101.709 26.6183 99.0699 22.0937C96.0535 16.9407 92.6601 11.9134 89.518 6.88603C89.0153 6.13193 88.3869 5.37783 87.5071 4.24668C89.0153 3.74394 90.1464 3.36689 91.2776 3.11552C97.4361 1.85869 103.595 2.48711 109.627 4.24668C119.179 7.13739 127.097 12.6675 134.387 19.203C135.518 20.2085 136.524 21.2139 137.529 22.3451C138.66 23.7276 139.917 23.979 141.425 22.9735C143.059 21.8424 144.819 20.9626 146.327 19.7057C149.595 16.815 150.349 12.9188 148.464 9.02264C147.584 7.13739 146.453 5.50351 145.196 3.49258C146.578 2.98984 147.835 2.36142 149.092 2.11005C166.436 -2.41455 182.649 0.350485 197.48 10.2795C210.425 18.9516 219.475 30.7659 225.382 45.2195C225.633 45.9736 225.885 46.602 226.262 47.8588C224.628 47.2304 223.497 46.8533 222.365 46.3506C195.218 35.6675 167.567 33.908 139.414 42.2031C120.939 47.6075 104.6 57.0337 90.2721 69.9791C65.1354 92.4764 51.5616 120.755 48.9223 154.313C48.6709 157.706 47.1627 159.466 44.5233 160.345C37.3594 162.733 30.0698 164.367 22.5288 163.236C15.2391 162.231 10.3375 158.083 7.82378 151.171C6.31558 147.023 5.93853 142.624 5.93853 138.1C5.93853 130.936 7.06969 124.023 8.70357 117.11C9.96041 111.957 11.3429 106.804 12.7254 101.4C7.94947 100.772 3.42487 99.389 1.03689 94.4874C-0.345629 91.848 -0.345629 87.9518 1.03689 84.307C2.16804 84.8098 3.42487 85.1868 4.55602 85.6895C9.33199 87.4491 14.108 88.8316 19.261 88.4546C23.6599 88.2032 27.4304 86.695 30.3211 83.0502C31.7036 81.4163 31.8293 79.9081 30.8239 78.0229C26.1736 69.0993 18.3812 65.0774 8.32652 66.837C7.06969 67.0884 5.81286 67.3398 4.30466 67.2141C5.05876 66.3343 5.81286 65.3288 6.69264 64.5747C10.3375 61.1813 14.7364 59.0446 19.5123 57.6621C26.0479 55.7769 32.8348 55.1484 39.6217 55.1484C47.6654 55.2741 55.7092 56.2796 63.6272 57.7878C65.8895 58.1649 68.0261 58.6676 70.2884 59.1703C73.5562 59.9244 74.9387 58.919 75.0644 55.5255C75.1901 52.2577 73.6819 49.4927 71.5453 47.3561C68.6546 44.4654 65.5125 41.826 62.3704 39.061C61.2393 38.5583 60.3595 37.9298 59.354 37.1757Z"
      fill="#D3161A"
    />
    <path
      d="M301.044 124.651C293.377 102.028 280.432 82.7986 262.71 66.5854C280.432 69.6019 298.027 72.6182 316 75.6347C311.099 92.0992 306.323 108.312 301.672 124.4C301.421 124.526 301.17 124.526 301.044 124.651Z"
      fill="#D3161A"
    />
    <path
      d="M173.725 218.537C205.169 218.537 230.66 193.047 230.66 161.603C230.66 130.158 205.169 104.668 173.725 104.668C142.281 104.668 116.791 130.158 116.791 161.603C116.791 193.047 142.281 218.537 173.725 218.537Z"
      fill="white"
    />
    <path
      d="M172.469 191.64C188.851 191.64 202.13 178.361 202.13 161.979C202.13 145.598 188.851 132.318 172.469 132.318C156.088 132.318 142.808 145.598 142.808 161.979C142.808 178.361 156.088 191.64 172.469 191.64Z"
      fill="#020203"
    />
    <path
      d="M157.262 167.887C162.537 167.887 166.814 163.61 166.814 158.335C166.814 153.059 162.537 148.783 157.262 148.783C151.986 148.783 147.71 153.059 147.71 158.335C147.71 163.61 151.986 167.887 157.262 167.887Z"
      fill="white"
    />
    <path
      d="M174.103 162.985C176.81 162.985 179.005 160.79 179.005 158.083C179.005 155.376 176.81 153.182 174.103 153.182C171.396 153.182 169.201 155.376 169.201 158.083C169.201 160.79 171.396 162.985 174.103 162.985Z"
      fill="white"
    />
    <path
      d="M169.955 151.548C170.996 151.548 171.84 150.704 171.84 149.663C171.84 148.621 170.996 147.777 169.955 147.777C168.914 147.777 168.07 148.621 168.07 149.663C168.07 150.704 168.914 151.548 169.955 151.548Z"
      fill="white"
    />
  </svg>
);

export default Footer;
