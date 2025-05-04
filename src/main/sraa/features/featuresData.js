const featuresData = [
  {
    id: 1,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        className="fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 0L5 5V16C5 27 11.5 35.5 20 40C28.5 35.5 35 27 35 16V5L20 0Z"
          fill="currentColor"
          opacity="0.5"
        />
        <path
          d="M25 18C25 21.866 21.866 25 18 25C14.134 25 11 21.866 11 18C11 14.134 14.134 11 18 11C21.866 11 25 14.134 25 18ZM28 27L24 23"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Vulnerability Scanning",
    paragraph:
      "We employ advanced tools to identify and assess vulnerabilities across your network infrastructure, providing a comprehensive view of potential weaknesses.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M20.5914 34.2584C20.2394 34.5172 19.7603 34.5175 19.408 34.2593L4.19163 23.1079C3.8395 22.8498 3.36065 22.85 3.00873 23.1084L1.09802 24.5111C0.553731 24.9107 0.553731 25.7237 1.09802 26.1233L19.4082 39.5655C19.7604 39.824 20.2396 39.824 20.5918 39.5655L38.9029 26.1226C39.4469 25.7232 39.4473 24.9107 38.9036 24.5109L36.9701 23.0889C36.6177 22.8298 36.1378 22.8297 35.7854 23.0888L20.5914 34.2584Z"
        />
        <path d="M19.408 28.931C19.7603 29.1896 20.2396 29.1894 20.5918 28.9306L36.3556 17.3466L38.8979 15.4883C39.4437 15.0894 39.4446 14.275 38.8996 13.8749L20.5918 0.43445C20.2396 0.175911 19.7604 0.175913 19.4082 0.434452L1.09706 13.8774C0.553051 14.2767 0.552712 15.0892 1.09638 15.4891L3.62222 17.3466L19.408 28.931Z" />
      </svg>
    ),
    title: "Web Application Penetration Testing",
    paragraph:
      "Our experts conduct thorough penetration tests on your web applications to uncover security flaws and provide actionable remediation strategies.",
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M20 30C22.75 30 25 32.25 25 35C25 37.75 22.75 40 20 40C17.25 40 15 37.75 15 35C15 32.25 17.25 30 20 30ZM35 30C37.75 30 40 32.25 40 35C40 37.75 37.75 40 35 40C32.25 40 30 37.75 30 35C30 32.25 32.25 30 35 30ZM35 15C37.75 15 40 17.25 40 20C40 22.75 37.75 25 35 25C32.25 25 30 22.75 30 20C30 17.25 32.25 15 35 15Z"
        />
        <path d="M20 15C22.75 15 25 17.25 25 20C25 22.75 22.75 25 20 25C17.25 25 15 22.75 15 20C15 17.25 17.25 15 20 15ZM20 0C22.75 0 25 2.25 25 5C25 7.75 22.75 10 20 10C17.25 10 15 7.75 15 5C15 2.25 17.25 0 20 0ZM5 30C7.75 30 10 32.25 10 35C10 37.75 7.75 40 5 40C2.25 40 0 37.75 0 35C0 32.25 2.25 30 5 30ZM5 15C7.75 15 10 17.25 10 20C10 22.75 7.75 25 5 25C2.25 25 0 22.75 0 20C0 17.25 2.25 15 5 15ZM5 0C7.75 0 10 2.25 10 5C10 7.75 7.75 10 5 10C2.25 10 0 7.75 0 5C0 2.25 2.25 0 5 0ZM35 0C37.75 0 40 2.25 40 5C40 7.75 37.75 10 35 10C32.25 10 30 7.75 30 5C30 2.25 32.25 0 35 0Z" />
      </svg>
    ),
    title: "Phishing Attack Simulation",
    paragraph:
      "We simulate real-world phishing scenarios to evaluate your organization's resilience against social engineering attacks and improve employee awareness.",
  },
  {
    id: 4,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current"
      >
        <rect
          x="10"
          y="5"
          width="20"
          height="30"
          rx="3"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="20" cy="30" r="2" fill="currentColor" />
        <path
          d="M28 15L22 21L18 17L12 23"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30 11V8C30 6.34315 28.6569 5 27 5H13C11.3431 5 10 6.34315 10 8V11"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
    title: "Mobile App Assessment",
    paragraph:
      "Our team performs in-depth security assessments of your mobile applications, identifying vulnerabilities specific to mobile platforms and providing recommendations for enhanced security.",
  },
  {
    id: 5,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M20 2C10.6112 2 3 9.61116 3 19C3 26.6488 8.01147 32.9146 14.8731 34.6229V37.2857C14.8731 38.7813 16.0918 40 17.5874 40H22.4126C23.9082 40 25.1269 38.7813 25.1269 37.2857V34.6229C31.9885 32.9146 37 26.6488 37 19C37 9.61116 29.3888 2 20 2ZM20 32C13.3726 32 8 26.6274 8 20C8 13.3726 13.3726 8 20 8C26.6274 8 32 13.3726 32 20C32 26.6274 26.6274 32 20 32Z"
        />
        <path d="M20 14C16.134 14 13 17.134 13 21C13 24.866 16.134 28 20 28C23.866 28 27 24.866 27 21C27 17.134 23.866 14 20 14ZM20 25C17.7909 25 16 23.2091 16 21C16 18.7909 17.7909 17 20 17C22.2091 17 24 18.7909 24 21C24 23.2091 22.2091 25 20 25Z" />
      </svg>
    ),
    title: "Windows and Mac App Assessment",
    paragraph:
      "We conduct comprehensive security evaluations of your desktop applications, ensuring they meet industry security standards and best practices.",
  },
  {
    id: 6,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 0L3 7V18C3 30 12 37 20 40C28 37 37 30 37 18V7L20 0ZM20 36C13 33 6 27 6 18V9L20 3L34 9V18C34 27 27 33 20 36ZM26 14L18 22L14 18L12 20L18 26L28 16L26 14Z" />
      </svg>
    ),
    title: "Red Team Services",
    paragraph:
      "Our red team simulates real-world adversarial tactics to test your organization's detection and response capabilities, providing valuable insights into your security posture.",
  },
  {
    id: 7,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 0L3 7V18C3 30 12 37 20 40C28 37 37 30 37 18V7L20 0ZM20 36C13 33 6 27 6 18V9L20 3L34 9V18C34 27 27 33 20 36ZM19 12H21V22H19V12ZM19 26H21V28H19V26Z" />
      </svg>
    ),
    title: "Incident Response",
    paragraph:
      "We offer rapid and effective incident response services to help your organization quickly recover from security breaches and implement measures to prevent future incidents.",
  },
  {
    id: 8,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M30 15C29.7 10 25.6 6 20.5 6C16.3 6 12.7 8.5 11.3 12.2C7.3 12.7 4 16.3 4 20.5C4 24.9 7.6 28.5 12 28.5H30C33.3 28.5 36 25.8 36 22.5C36 19.3 33.5 16.8 30.3 16.5C30.2 16 30 15.5 30 15ZM26 30H14V35C14 37 15 39 18 39H22C25 39 26 37 26 35V30ZM18 18H22V26H18V18ZM18 28H22V30H18V28Z" />
      </svg>
    ),
    title: "Cloud Security Review",
    paragraph:
      "Our experts assess your cloud infrastructure and configurations to ensure compliance with best practices and identify potential security gaps in your cloud environment.",
  },
];

export default featuresData;
