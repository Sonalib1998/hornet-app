import React from "react";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import './transaction.css'

const TransactionItem = styled(Paper)(({ theme }) => ({
  backgroundColor: '#1A2027',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: '#fff',
  display: 'flex', 
  flexDirection: 'column', 
  justifyContent: 'space-between', 
}));

const gridStyle = {
  height: '100%',
};

const TransactionDetails = ({ details }) => {
  if (!details || !Array.isArray(details) || details.length === 0) {
    return null;
  }

  return (
    <div className="transaction-details">
      <Stack spacing={2}>
        {details.map((detail, index) => (
          <Grid container spacing={2} key={index}>
            <Grid item xs={12}>
              <TransactionItem elevation={3}>
                <div className="transaction-detail">
                  <h2>Transaction Details: {index + 1}</h2>

                  <p>
                    <strong>Transaction ID:</strong> {detail.txid}
                  </p>
                  <p>
                    <strong>Hash:</strong> {detail.hash}
                  </p>
                  <p>
                    <strong>Block Hash:</strong> {detail.blockhash}
                  </p>
                  <p>
                    <strong>Confirmations:</strong> {detail.confirmations}
                  </p>
                  <p>
                    <strong>Time:</strong> {detail.time}
                  </p>
                  <p>
                    <strong>Block Time:</strong> {detail.blocktime}
                  </p>
                </div>
              </TransactionItem>
            </Grid>
            
            {/* Fee */}
            {detail.fee && (
              <Grid item xs={12} sm={4} style={gridStyle}>
                <TransactionItem elevation={3}>
                  <div>
                    <h3>Fee</h3>
                    <p>
                      <strong>Amount:</strong> {detail.fee.amount},{" "}
                      <strong>Unit:</strong> {detail.fee.unit}
                    </p>
                  </div>
                </TransactionItem>
              </Grid>
            )}

            {/* Outputs */}
            {detail.vout && (
              <Grid item xs={12} sm={4} style={gridStyle}>
                <TransactionItem elevation={3}>
                  <div>
                    <h3>Outputs</h3>
                    <ul>
                      {detail.vout.map((output, outputIndex) => (
                        <li key={outputIndex}>
                          <p>
                            <strong>Value:</strong> {output.value}
                          </p>
                          <p>
                            <strong>N:</strong> {output.n}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TransactionItem>
              </Grid>
            )}

            {/* Inputs */}
            {detail.vin && (
              <Grid item xs={12} sm={4} style={gridStyle}>
                <TransactionItem elevation={3}>
                  <div>
                    <h3>Inputs</h3>
                    <ul>
                      {detail.vin.map((input, index) => (
                        <li key={index}>
                          <p>
                            <strong>Value:</strong> {input.value}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TransactionItem>
              </Grid>
            )}
          </Grid>
        ))}
      </Stack>
    </div>
  );
};

export default TransactionDetails;
