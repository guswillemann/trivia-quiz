import { Theme } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

export default function Logo() {
  const theme: Theme = useTheme();

  const textColor = theme.palette.type === 'light' ? '#212121' : '#FFFFFF';

  return (
    <svg id="logo" width="191" height="83" viewBox="0 0 191 83" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M112.945 13.3086H104.234V37H98.375V13.3086H89.7812V8.5625H112.945V13.3086ZM126.52 21.1602C125.751 21.056 125.074 21.0039 124.488 21.0039C122.353 21.0039 120.953 21.7266 120.289 23.1719V37H114.645V15.8672H119.977L120.133 18.3867C121.266 16.4466 122.835 15.4766 124.84 15.4766C125.465 15.4766 126.051 15.5612 126.598 15.7305L126.52 21.1602ZM135.211 37H129.547V15.8672H135.211V37ZM129.215 10.3984C129.215 9.55208 129.495 8.85547 130.055 8.30859C130.628 7.76172 131.402 7.48828 132.379 7.48828C133.342 7.48828 134.111 7.76172 134.684 8.30859C135.257 8.85547 135.543 9.55208 135.543 10.3984C135.543 11.2578 135.25 11.9609 134.664 12.5078C134.091 13.0547 133.329 13.3281 132.379 13.3281C131.428 13.3281 130.66 13.0547 130.074 12.5078C129.501 11.9609 129.215 11.2578 129.215 10.3984ZM147.789 30.1055L151.715 15.8672H157.613L150.484 37H145.094L137.965 15.8672H143.863L147.789 30.1055ZM166.07 37H160.406V15.8672H166.07V37ZM160.074 10.3984C160.074 9.55208 160.354 8.85547 160.914 8.30859C161.487 7.76172 162.262 7.48828 163.238 7.48828C164.202 7.48828 164.97 7.76172 165.543 8.30859C166.116 8.85547 166.402 9.55208 166.402 10.3984C166.402 11.2578 166.109 11.9609 165.523 12.5078C164.951 13.0547 164.189 13.3281 163.238 13.3281C162.288 13.3281 161.52 13.0547 160.934 12.5078C160.361 11.9609 160.074 11.2578 160.074 10.3984ZM182.984 37C182.724 36.4922 182.535 35.8607 182.418 35.1055C181.051 36.6289 179.273 37.3906 177.086 37.3906C175.016 37.3906 173.297 36.7917 171.93 35.5938C170.576 34.3958 169.898 32.8854 169.898 31.0625C169.898 28.8229 170.725 27.1042 172.379 25.9062C174.046 24.7083 176.448 24.1029 179.586 24.0898H182.184V22.8789C182.184 21.9023 181.93 21.1211 181.422 20.5352C180.927 19.9492 180.139 19.6562 179.059 19.6562C178.108 19.6562 177.359 19.8841 176.812 20.3398C176.279 20.7956 176.012 21.4206 176.012 22.2148H170.367C170.367 20.9909 170.745 19.8581 171.5 18.8164C172.255 17.7747 173.323 16.9609 174.703 16.375C176.083 15.776 177.633 15.4766 179.352 15.4766C181.956 15.4766 184.02 16.1341 185.543 17.4492C187.079 18.7513 187.848 20.5872 187.848 22.957V32.1172C187.861 34.1224 188.141 35.6393 188.688 36.668V37H182.984ZM178.316 33.0742C179.15 33.0742 179.918 32.8919 180.621 32.5273C181.324 32.1497 181.845 31.6484 182.184 31.0234V27.3906H180.074C177.249 27.3906 175.745 28.3672 175.562 30.3203L175.543 30.6523C175.543 31.3555 175.79 31.9349 176.285 32.3906C176.78 32.8464 177.457 33.0742 178.316 33.0742Z" fill={textColor} />
      <path d="M99.8594 59.4258C99.8594 62.082 99.4297 64.3932 98.5703 66.3594C97.7109 68.3125 96.5195 69.8815 94.9961 71.0664L99.7227 74.7773L95.9922 78.0781L89.9375 73.2148C89.2474 73.332 88.5312 73.3906 87.7891 73.3906C85.4323 73.3906 83.3294 72.8242 81.4805 71.6914C79.6315 70.5586 78.1992 68.944 77.1836 66.8477C76.168 64.7383 75.6536 62.3164 75.6406 59.582V58.1758C75.6406 55.3763 76.1419 52.9154 77.1445 50.793C78.1602 48.6576 79.5859 47.0234 81.4219 45.8906C83.2708 44.7448 85.3802 44.1719 87.75 44.1719C90.1198 44.1719 92.2227 44.7448 94.0586 45.8906C95.9076 47.0234 97.3333 48.6576 98.3359 50.793C99.3516 52.9154 99.8594 55.3698 99.8594 58.1562V59.4258ZM93.9219 58.1367C93.9219 55.1549 93.388 52.8893 92.3203 51.3398C91.2526 49.7904 89.7292 49.0156 87.75 49.0156C85.7839 49.0156 84.2669 49.7839 83.1992 51.3203C82.1315 52.8438 81.5911 55.0833 81.5781 58.0391V59.4258C81.5781 62.3294 82.112 64.582 83.1797 66.1836C84.2474 67.7852 85.7839 68.5859 87.7891 68.5859C89.7552 68.5859 91.2656 67.8177 92.3203 66.2812C93.375 64.7318 93.9089 62.4792 93.9219 59.5234V58.1367ZM116.441 70.8516C115.048 72.5443 113.121 73.3906 110.66 73.3906C108.395 73.3906 106.663 72.7396 105.465 71.4375C104.28 70.1354 103.674 68.2279 103.648 65.7148V51.8672H109.293V65.5195C109.293 67.7201 110.296 68.8203 112.301 68.8203C114.215 68.8203 115.53 68.1562 116.246 66.8281V51.8672H121.91V73H116.598L116.441 70.8516ZM132.125 73H126.461V51.8672H132.125V73ZM126.129 46.3984C126.129 45.5521 126.409 44.8555 126.969 44.3086C127.542 43.7617 128.316 43.4883 129.293 43.4883C130.257 43.4883 131.025 43.7617 131.598 44.3086C132.171 44.8555 132.457 45.5521 132.457 46.3984C132.457 47.2578 132.164 47.9609 131.578 48.5078C131.005 49.0547 130.243 49.3281 129.293 49.3281C128.342 49.3281 127.574 49.0547 126.988 48.5078C126.415 47.9609 126.129 47.2578 126.129 46.3984ZM143.277 68.4492H153.609V73H136.07V69.5625L146.012 56.4375H136.363V51.8672H153.297V55.207L143.277 68.4492Z" fill={textColor} />
      <path d="M162.887 64.2695H158.199L157.535 44.5625H163.551L162.887 64.2695ZM160.543 67.3555C161.493 67.3555 162.255 67.6354 162.828 68.1953C163.414 68.7552 163.707 69.4714 163.707 70.3438C163.707 71.2031 163.414 71.9128 162.828 72.4727C162.255 73.0326 161.493 73.3125 160.543 73.3125C159.605 73.3125 158.844 73.0326 158.258 72.4727C157.685 71.9128 157.398 71.2031 157.398 70.3438C157.398 69.4844 157.685 68.7747 158.258 68.2148C158.844 67.6419 159.605 67.3555 160.543 67.3555Z" fill="#25A737"/>
      <path d="M8.50956 9.56067L23.4582 56.9322L37.8181 9.34795L46.3466 9.28994L26.5353 72.9032L20.609 72.9419L0 9.61867L8.50956 9.56067Z" fill={theme.palette.primary.main} />
      <path d="M46.3466 9.27072L61.2953 56.8937L75.6551 9.058L84.1836 9L64.3724 72.9613L58.4461 73L37.837 9.34802L46.3466 9.27072Z" fill={theme.palette.secondary.main} />
    </svg>
  );
}