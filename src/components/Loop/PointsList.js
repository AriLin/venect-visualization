const pointsList = [
  {
    measurement: "TE-001",
    panelId: 2,
    position: {
      top: "67.5",
      left: "28"
    }
  },
  {
    measurement: "TE-002",
    panelId: 4,
    position: {
      top: "41",
      left: "0.5"
    }
  },
  {
    measurement: "TE-003",
    panelId: 6,
    position: {
      top: "67.5",
      left: "9.3"
    }
  },
  {
    measurement: "TE-004",
    panelId: 7,
    position: {
      top: "56.5",
      left: "14.8"
    }
  },
  {
    measurement: "TE-005",
    panelId: 8,
    position: {
      top: "55",
      left: "51.5"
    }
  },
  {
    measurement: "TE-006",
    panelId: 9,
    position: {
      top: "18.5",
      left: "68.4"
    }
  },
  {
    measurement: "TE-007",
    panelId: 10,
    position: {
      top: "45",
      left: "68.4"
    }
  },
  {
    measurement: "TE-008",
    panelId: 11,
    position: {
      top: "72",
      left: "68.5"
    }
  },
  {
    measurement: "TE-009",
    panelId: 12,
    position: {
      top: "24",
      left: "78.7"
    }
  },
  {
    measurement: "TE-010",
    panelId: 16,
    position: {
      top: "34",
      left: "78.7"
    }
  },
  {
    measurement: "TE-011",
    panelId: 15,
    position: {
      top: "49.5",
      left: "78.7"
    }
  },
  {
    measurement: "TE-012",
    panelId: 18,
    position: {
      top: "60",
      left: "78.7"
    }
  },
  {
    measurement: "TE-013",
    panelId: 17,
    position: {
      top: "75",
      left: "78.7"
    }
  },
  {
    measurement: "TE-014",
    panelId: 14,
    position: {
      top: "86",
      left: "78.7"
    }
  },
  {
    measurement: "TE-015",
    panelId: 13,
    position: {
      top: "3",
      left: "74.5"
    }
  },
  {
    measurement: "TE-016",
    panelId: 22,
    position: {
      top: "18",
      left: "58.5"
    }
  },
  {
    measurement: "TE-017",
    panelId: 21,
    position: {
      top: "55",
      left: "45"
    }
  },
  {
    measurement: "TE-018",
    panelId: 20,
    position: {
      top: "67.5",
      left: "37.7"
    }
  },
  {
    measurement: "TE-019",
    panelId: 19,
    position: {
      top: "77",
      left: "29.5"
    }
  },
  {
    measurement: "HV-001",
    panelId: 25,
    position: {
      top: "28",
      left: "73"
    }
  },
  {
    measurement: "HV-002",
    panelId: 24,
    position: {
      top: "40",
      left: "85.5"
    }
  },
  {
    measurement: "HV-003",
    panelId: 32,
    position: {
      top: "28",
      left: "85.5"
    }
  },
  {
    measurement: "HV-004",
    panelId: 31,
    position: {
      top: "55",
      left: "73"
    }
  },
  {
    measurement: "HV-005",
    panelId: 30,
    position: {
      top: "67",
      left: "85.5"
    }
  },
  {
    measurement: "HV-006",
    panelId: 29,
    position: {
      top: "54.5",
      left: "85.5"
    }
  },
  {
    measurement: "HV-007",
    panelId: 28,
    position: {
      top: "81",
      left: "73"
    }
  },
  {
    measurement: "HV-008",
    panelId: 27,
    position: {
      top: "92.5",
      left: "85.5"
    }
  },
  {
    measurement: "HV-009",
    panelId: 26,
    position: {
      top: "80.5",
      left: "85.5"
    }
  },
  {
    measurement: "HV-010",
    panelId: 33,
    position: {
      top: "2",
      left: "59.3"
    }
  },
  {
    measurement: "HV-011",
    panelId: 34,
    position: {
      top: "2",
      left: "90.5"
    }
  },
  {
    measurement: "P1_FE",
    panelId: 39,
    position: {
      top: "43",
      left: "39"
    }
  },
  {
    measurement: "P1_RPM",
    panelId: 38,
    position: {
      top: "39.5",
      left: "39"
    }
  },
  {
    measurement: "P1_PE",
    panelId: 36,
    position: {
      top: "36",
      left: "39"
    }
  },
  {
    measurement: "P1_PWM",
    panelId: 37,
    position: {
      top: "32.5",
      left: "39"
    }
  },
  {
    measurement: "P1_TE",
    panelId: 40,
    position: {
      top: "29",
      left: "39"
    }
  },
  {
    measurement: "P2_FE",
    panelId: 46,
    position: {
      top: "43",
      left: "48.5"
    }
  },
  {
    measurement: "P2_RPM",
    panelId: 48,
    position: {
      top: "39.5",
      left: "48.5"
    }
  },
  {
    measurement: "P2_PE",
    panelId: 42,
    position: {
      top: "36",
      left: "48.5"
    }
  },
  {
    measurement: "P2_PWM",
    panelId: 50,
    position: {
      top: "32.5",
      left: "48.5"
    }
  },
  {
    measurement: "P2_TE",
    panelId: 44,
    position: {
      top: "29",
      left: "48.5"
    }
  },

  {
    measurement: "P3_PE",
    panelId: 41,
    position: {
      top: "3",
      left: "82"
    }
  },
  {
    measurement: "P3_PWM",
    panelId: 49,
    position: {
      top: "10",
      left: "82"
    }
  },
  {
    measurement: "P3_FE",
    panelId: 45,
    position: {
      top: "10",
      left: "85.5"
    }
  },
  {
    measurement: "P3_TE",
    panelId: 43,
    position: {
      top: "3",
      left: "85.5"
    }
  },
  {
    measurement: "F2_FE",
    panelId: 60,
    position: {
      top: "71.5",
      left: "57.5"
    }
  },
  {
    measurement: "F2_PWM",
    panelId: 53,
    position: {
      top: "71.5",
      left: "54"
    }
  },
  {
    measurement: "F1_PWM",
    panelId: 52,
    position: {
      top: "83.5",
      left: "54"
    }
  },
  {
    measurement: "F1_FE",
    panelId: 59,
    position: {
      top: "83.5",
      left: "57.5"
    }
  },
  {
    measurement: "AK_P_TE",
    panelId: 57,
    position: {
      top: "27",
      left: "22"
    }
  },
  {
    measurement: "AK_P_PWM",
    panelId: 54,
    position: {
      top: "34",
      left: "22"
    }
  },
  {
    measurement: "AK_P_FE",
    panelId: 56,
    position: {
      top: "30.5",
      left: "22"
    }
  },
  {
    measurement: "AK_TE001",
    panelId: 55,
    position: {
      top: "7",
      left: "14"
    }
  },
  {
    measurement: "SC_PWM",
    panelId: 51,
    position: {
      top: "85",
      left: "26"
    }
  },
  {
    measurement: "O2",
    panelId: 62,
    position: {
      top: "77",
      left: "26"
    }
  },
  {
    measurement: "TE-020",
    panelId: 200,
    position: {
      top: "74",
      left: "47.5"
    }
  },
  {
    measurement: "TE-021",
    panelId: 210,
    position: {
      top: "68",
      left: "44.5"
    }
  },
  {
    measurement: "TE-022",
    panelId: 220,
    position: {
      top: "74",
      left: "41.5"
    }
  }
];

export default pointsList;
