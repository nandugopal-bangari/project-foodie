import { QRCode } from "react-qr-code";
function Scanner() {
  let finalAmount = 10;
  return (
    <>
      <h1><u><font color="lightgreen">Complete the payment of {finalAmount} To Enter the mall</font></u></h1>
      <br />
      <QRCode
        value={`upi://pay?pa=7794850273@ybl&pn=nandumall&am=${finalAmount.toFixed(2)}&cu=INR`}
      />
      <h1><font color="skyblue" font="italic">Pay to enjoy the day</font></h1>
    </>
  );
}
export default Scanner;