const CONFIG = [
  { key: "HDR", name: "Header", start: 0, length: 12, value: 'ISO026000050' },
  { key: "TYP", name: "Tipo Mensaje", start: 0, length: 4 },

  { key: "P-1", name: "Bit map, Secondary", start: 0, length: 64, value: '0000000000000000000000000000000000010000000000000000000110101100' },
  { key: "P-3", name: "Processing Code", start: 20, length: 6 },
  { key: "P-4", name: "Transaction Amount", start: 42, length: 12 },
  { key: "P-7", name: "Transmission Date and Time", start: 54, length: 10 },
  { key: "P-11", name: "Systems Trace Audit Number", start: 64, length: 6 },
  { key: "P-12", name: "Local Transaction Time", start: 70, length: 6 },
  { key: "P-13", name: "Local Transaction Date", start: 76, length: 4 },
  { key: "P-17", name: "Capture Date", start: 80, length: 4 },
  { key: "P-18", name: "Merchant Type", start: 84, length: 4 },
  { key: "P-22", name: "Point of Service Entry Mode", start: 88, length: 3 },
  { key: "P-32", name: "Acquiring Institution Identification Code", start: 93, length: 11 },
  { key: "P-35", name: "Track 2 Data", start: 106, length: 21 },
  { key: "P-37", name: "Retrieval Reference Number", start: 127, length: 12 },
  { key: "P-41", name: "Card Acceptor Terminal Identification", start: 139, length: 16 },
  { key: "P-42", name: "Card Acceptor Identification Code", start: 155, length: 15 },
  { key: "P-43", name: "Card Acceptor Name/Location", start: 170, length: 40 },
  { key: "P-48", name: "BASE24-atm Additional Data", start: 213, length: 27 },
  { key: "P-49", name: "Transaction Currency Code", start: 240, length: 3 },
  { key: "P-60", name: "BASE24-atm Terminal Data", start: 246, length: 16 },
  { key: "P-61", name: "BASE24-atm Card Issuer and Authorizer Data", start: 265, length: 19 },
  { key: "P-63", name: "BASE24-atm PIN Offset - pos Additional Data", start: 287, length: 142 },

  { key: "P-63.0", name: "Header", start: 287, length: 12 },
  { key: "P-63.1", name: "Q2", start: 299, length: 4 },
  { key: "P-63.1", name: "Q2 - Longitud", start: 303, length: 5 },

  { key: "P-63.2", name: "C0", start: 311, length: 4 },
  { key: "P-63.2", name: "C0 - Longitud", start: 315, length: 5 },

  { key: "P-63.3", name: "C4", start: 347, length: 4 },
  { key: "P-63.3", name: "C4 - Longitud", start: 351, length: 5 },

  { key: "P-63.4", name: "R4", start: 369, length: 4 },
  { key: "P-63.4", name: "R4 - Longitud", start: 373, length: 5 },

  { key: "P-63.5", name: "B4 EMV Status Token", start: 399, length: 4 },
  { key: "P-63.5", name: "B4 - Longitud", start: 403, length: 5 },

  { key: "P-63.5.1", name: "B4 - PT-SRV-ENTRY-MDE", start: 409, length: 3 },
  { key: "P-63.5.2", name: "B4 - TERM-ENTRY-CAP", start: 412, length: 1 },
  { key: "P-63.5.3", name: "B4 - LAST-EMV-STAT", start: 413, length: 1 },
  { key: "P-63.5.4", name: "B4 - DATA-SUSPECT", start: 414, length: 1 },
  { key: "P-63.5.5", name: "B4 - APPL-PAN-SEQ-NUM", start: 415, length: 2 },
  { key: "P-63.5.6", name: "B4 - DEV-INFO or CAM-FLAGS or CVM-RSLTS", start: 417, length: 6 },
  { key: "P-63.5.7", name: "B4 - RSN-ONL-CDE", start: 423, length: 4 },
  { key: "P-63.5.8", name: "B4 - ARQC-VRFY", start: 427, length: 1 },
  { key: "P-63.5.9", name: "B4 - USER-FLD1", start: 428, length: 1 },

  { key: "S-100", name: "Receiving Institution Identification Code", start: 445, length: 11 },
  { key: "S-120", name: "BASE24 Key Management", start: 445, length: 29 },
  { key: "S-121", name: "BASE24-from host maintenance Application File and Table Information", start: 477, length: 20 },
  { key: "S-123", name: "Cryptographic Service Message", start: 500, length: 20 },
  { key: "S-125", name: "BASE24-atm Account Indicator/Statement Print Data", start: 523, length: 12 },
  { key: "S-126", name: "BASE24-atm Additional Data", start: 538, length: 38 }
];