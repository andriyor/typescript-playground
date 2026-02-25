type Transaction = {
  amount: number;
}

type Ledger = {
  refType: string
}

type TransactionVertex = {
  id: string;
  label: "transaction";
  properties: Transaction;
}

type LedgerVertex = {
  id: string;
  label: "ledger";
  properties: Ledger;
}

type Vertex = TransactionVertex | LedgerVertex

const mixedTypes: Vertex[] = [
  {
    id: '23',
    label: 'transaction',
    properties: {
      amount: 200
    }
  },
  {
    id: '3',
    label: 'ledger',
    properties: {
      refType: 'refType'
    }
  }
]

for (const mixedType of mixedTypes) {
  if (mixedType.label === 'ledger') {
    console.log(mixedType.properties.refType);
  }
  if (mixedType.label !== "transaction") continue;
  console.log(mixedType.properties.amount);
}

const ledger1 = mixedTypes.find((txnVertex) => {
                 return txnVertex.label === 'ledger' && [
                   "props",
                 ].includes(txnVertex.properties.refType);
               });

// issue
console.log(ledger1?.properties.refType);


const ledger2 = mixedTypes.find((txnVertex): txnVertex is LedgerVertex => {
                 return txnVertex.label === 'ledger' && [
                   "props",
                 ].includes(txnVertex.properties.refType);
               });

// correct
console.log(ledger2?.properties.refType);
