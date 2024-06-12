import { SvgIcon } from "@mui/material";

export const IconEmptyImage = ({ width }: { width?: number }) => {
 return (
  <SvgIcon sx={{ width: width ? `${width}px` : "120px", height: "auto" }}>
   <svg
    width="180"
    height="180"
    viewBox="0 0 180 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
   >
    <ellipse opacity="0.1" cx="90" cy="174.6" rx="90" ry="5.4" fill="#979797" />
    <path
     fill-rule="evenodd"
     clip-rule="evenodd"
     d="M137.556 21.1934C137.556 18.5744 139.679 16.4512 142.298 16.4512C144.917 16.4512 147.04 18.5744 147.04 21.1934V30.9491C147.04 33.5682 144.917 35.6914 142.298 35.6914C139.679 35.6914 137.556 33.5682 137.556 30.9491V21.1934ZM142.298 20.0512C141.667 20.0512 141.156 20.5626 141.156 21.1934V30.9491C141.156 31.58 141.667 32.0914 142.298 32.0914C142.929 32.0914 143.44 31.58 143.44 30.9491V21.1934C143.44 20.5626 142.929 20.0512 142.298 20.0512ZM36 52.1998C36 43.2528 43.253 35.9998 52.2 35.9998H127.8C136.747 35.9998 144 43.2528 144 52.1998V112.18C155.323 114.652 163.8 124.736 163.8 136.8C163.8 150.717 152.518 162 138.6 162C127.184 162 117.542 154.409 114.444 144H52.2C43.253 144 36 136.747 36 127.8V52.1998ZM113.655 140.4C113.487 139.224 113.4 138.022 113.4 136.8C113.4 129.749 116.296 123.374 120.964 118.8H57.6C51.6353 118.8 46.8 113.964 46.8 108V57.5998C46.8 51.6351 51.6353 46.7998 57.6 46.7998H122.4C128.365 46.7998 133.2 51.6351 133.2 57.5998V108C133.2 109.568 132.866 111.058 132.265 112.403C134.289 111.879 136.412 111.6 138.6 111.6C139.205 111.6 139.805 111.621 140.4 111.663V52.1998C140.4 45.241 134.759 39.5998 127.8 39.5998H52.2C45.2412 39.5998 39.6 45.241 39.6 52.1998V127.8C39.6 134.759 45.2412 140.4 52.2 140.4H113.655ZM57.6 50.3998C53.6236 50.3998 50.4 53.6234 50.4 57.5998V97.8916L64.2438 83.6042C68.4873 79.2247 75.5127 79.2247 79.7562 83.6042L92.0532 96.2953C93.9609 98.2641 97.0412 98.4911 99.2169 96.8231L106.829 90.9871C110.706 88.0151 116.094 88.0151 119.971 90.9871L129.6 98.3693V57.5998C129.6 53.6234 126.376 50.3998 122.4 50.3998H57.6ZM109.23 76.733C109.23 80.8751 105.882 84.233 101.751 84.233C97.6201 84.233 94.2715 80.8751 94.2715 76.733C94.2715 72.5909 97.6201 69.233 101.751 69.233C105.882 69.233 109.23 72.5909 109.23 76.733ZM147.876 40.7421C147.876 38.123 149.999 35.9998 152.618 35.9998H162.374C164.993 35.9998 167.116 38.123 167.116 40.7421C167.116 43.3611 164.993 45.4843 162.374 45.4843H152.618C149.999 45.4843 147.876 43.3611 147.876 40.7421ZM152.618 39.5998C151.987 39.5998 151.476 40.1112 151.476 40.7421C151.476 41.3729 151.987 41.8843 152.618 41.8843H162.374C163.005 41.8843 163.516 41.3729 163.516 40.7421C163.516 40.1112 163.005 39.5998 162.374 39.5998H152.618ZM117 136.8C117 124.87 126.671 115.2 138.6 115.2C150.529 115.2 160.2 124.87 160.2 136.8C160.2 148.729 150.529 158.4 138.6 158.4C126.671 158.4 117 148.729 117 136.8ZM134.1 125.1C134.1 122.615 136.115 120.6 138.6 120.6C141.085 120.6 143.1 122.615 143.1 125.1V135.9C143.1 138.385 141.085 140.4 138.6 140.4C136.115 140.4 134.1 138.385 134.1 135.9V125.1ZM138.6 124.2C138.103 124.2 137.7 124.603 137.7 125.1V135.9C137.7 136.397 138.103 136.8 138.6 136.8C139.097 136.8 139.5 136.397 139.5 135.9V125.1C139.5 124.603 139.097 124.2 138.6 124.2ZM138.6 153C136.115 153 134.1 150.985 134.1 148.5C134.1 146.015 136.115 144 138.6 144C141.085 144 143.1 146.015 143.1 148.5C143.1 150.985 141.085 153 138.6 153ZM137.7 148.5C137.7 148.997 138.103 149.4 138.6 149.4C139.097 149.4 139.5 148.997 139.5 148.5C139.5 148.003 139.097 147.6 138.6 147.6C138.103 147.6 137.7 148.003 137.7 148.5Z"
     fill="#979797"
    />
   </svg>
  </SvgIcon>
 );
};