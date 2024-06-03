import { gmail_v1 } from '@googleapis/gmail';
import first from 'lodash/first';
import { escape } from 'querystring';

const exMsg = `
<!doctype html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="target-densitydpi=device-dpi">
    <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="HandheldFriendly" content="true">
    <meta name="MobileOptimized" content="width">
    <title>HDFC BANK</title><!-- Facebook sharing information tags -->
    <!--<meta property="og:title" content="HDFC BANK" />-->
    <style type="text/css">
        @media screen and (min-device-width: 320px) and (max-device-width: 768px) {
            table {
                width: 100%;
            }

            .td {
                padding: 0px 25px;
                text-align: left;
            }

            .heading {
                text-align: center;
                padding: 0px 25px;
            }

            .cta {
                padding: 0px 25px;
                text-align: center;
            }
        }
    </style>
</head>

<body data-new-gr-c-s-loaded="14.1101.0">
    <table width="600" border="0" cellspacing="0" cellpadding="0" align="center">
        <tbody>
			  <tr>
                <td style="border-bottom:1px solid #cccccc; border-top:1px solid #cccccc; border-left:1px solid #cccccc;border-right:1px solid #cccccc;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tbody>
                            <tr>
                                <td valign="top" bgcolor="#dcddde" style="line-height:0px;background-color:#dcddde; border-left:1px solid #dcddde;"><a href="https://trkt.aclmails.in/a/r/QS4xNjkxMTM0Njc2MDI4Njg5NTA3LjIyODA0LjExNTYuNi4xLjAuMC4x/TEFWTUFOVFJJQEdNQUlMLkNPTQ%3D%3D/eyJkaXZpZCI6IlVQSUFMUlQifQ%3D%3D/0/aHR0cHM6Ly9hcHBseW9ubGluZS5oZGZjYmFuay5jb20vZml4ZWQtZGVwb3NpdHMvZXhpc3RpbmctY3VzdG9tZXJzLW9wZW4tZmQtb25saW5lLmh0bWw%2FdXRtX3NvdXJjZT1lbWFpbCZ1dG1fbWVkaXVtPWluc3RhX2FsZXJ0JnV0bV9jYW1wYWlnbj1mZF9zaW5jaF9uZXc%3D" target="_blank"><img src="https://img.pinchappmails.com/hdfc/images/2023/june/Insta-alert-FD.jpg" style="display: block; vertical-align: top" alt width="100%" border="0"></a></td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td height="20"></td>
            </tr>
            <tr>
                <td valign="top" bgcolor="#dcddde" style="line-height:0px;background-color:#dcddde; border-left:1px solid #dcddde;"><img src="https://wgjpss.stripocdn.email/content/guids/CABINET_d17330eb5cbe5af68cf444e0d9b181ad116d88b22fb8b3fd1c93e1846c59af76/images/nmbandnew.jpg" alt width="100%" border="0"></td>
            </tr>
            <tr>
                <td>
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tbody>
                            <tr>
                                <td valign="top" align="center">
                                    <table align="center" width="550" border="0" cellspacing="0" cellpadding="0">
                                        <tbody>
                                            <tr>
                                                <td width="550" valign="top" align="center">
                                                    <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100% !important; text-align: center">
                                                        <tbody>
                                                            <tr>
                                                                <td height="15"></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tbody>
                            <tr>
                                <td valign="top" align="center">
                                    <table align="center" width="550" border="0" cellspacing="0" cellpadding="0">
                                        <tbody>
                                            <tr>
                                                <td width="550" valign="top" align="center">
                                                    <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100% !important; text-align: center">
                                                        <tbody>
                                                            <tr>
                                                                <td height></td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left" valign="middle" style="font-family:Arial; font-size:16px; line-height:22px; color:#000; font-weight: normal; text-align: left" class="td esd-text">Dear Customer,<br> <br> Rs.168.00 has been debited from account **8703 to VPA AMZN0026710995@apl on 04-08-23. Your UPI transaction reference number is 321698886674.<br> <br> Please call on 18002586161 to report if this transaction was not authorized by you.<br> <br> Warm Regards,<br> HDFC Bank

</td>
                                                            </tr>
                                                            <tr>
                                                                <td height="25"></td>
                                                            </tr>
															<tr>
                                                                <td align="left" valign="middle" style="font-family:Arial; font-size:16px; line-height:22px; color:#000; font-weight: normal; text-align: left" class="td esd-text">
</td>
                                                            </tr>
                                                            <tr>
                                                                <td height="25"></td>
                                                            </tr>
														
															<tr>
                                                                <td align="left" valign="middle" style="font-family:Arial; font-size:16px; line-height:22px; color:#000; font-weight: normal; text-align: left; border-bottom: 2px solid #cccccc; padding-bottom: 0px" class="td esd-text">
</td>
                                                            </tr>
                                                            <tr>
                                                                <td height="15"></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
          <tr>
                <td valign="top"  style="line-height:0px; border-left:0px solid #dcddde; padding-bottom: 5px"><img src="https://img.pinchappmails.com/hdfc/images/2023/april/nevershareinstaalert_600x60128thapril.png" alt width="100%" border="0"></td>
            </tr>
            
            <tr>
                <td style="font-family:Arial,Helvetica,sans-serif;color:#000000;padding-bottom:5px;padding-top:5px;text-align:left;font-size:0.5rem;border:none;line-height:12px;padding-left:15px;padding-right:15px" align="left" class="esd-text">For more details on Service charges and Fees, <a href="https://trkt.aclmails.in/a/r/QS4xNjkxMTM0Njc2MDI4Njg5NTA3LjIyODA0LjExNTYuNi4xLjAuMC4x/TEFWTUFOVFJJQEdNQUlMLkNPTQ%3D%3D/eyJkaXZpZCI6IlVQSUFMUlQifQ%3D%3D/1/aHR0cHM6Ly93d3cuaGRmY2JhbmsuY29tL3BlcnNvbmFsL3Jlc291cmNlcy9mZWVzLWFuZC1jaGFyZ2Vz" style="text-decoration:underline;color:#004b8d;outline:none" target="_blank"><strong> click here.</strong></a></td>
            </tr>
            
            
            <tr>
                <td style="font-family:Arial,Helvetica,sans-serif;color:#000000;text-align:left;font-size:0.5rem;border:none;padding-left:15px" align="left" width="30%" class="esd-text">© HDFC Bank</td>
            </tr>
			  
           
        </tbody>
    </table>
</body>

</html><img src="https://trkt.aclmails.in/a/w/QS4xNjkxMTM0Njc2MDI4Njg5NTA3LjIyODA0LjExNTYuNi4xLjAuMC4x/TEFWTUFOVFJJQEdNQUlMLkNPTQ%3D%3D/eyJkaXZpZCI6IlVQSUFMUlQifQ%3D%3D"  width="1" height="1" border="0">
`;

const HDFC_UPI_MSG = '❗You have done a UPI txn. Check details!';

export const upiSubjectMatch = (msg: gmail_v1.Schema$Message) => {
  const msgSubjectHeader = msg.payload.headers.find(
    header => header.name === 'Subject',
  );

  return msgSubjectHeader.value === HDFC_UPI_MSG;
};

export const upiParser = (msg: gmail_v1.Schema$Message) => {
  if (msg.payload.mimeType !== 'multipart/alternative') {
    console.warn(
      'UPI email format might have been changed. Will try to proceed anyway',
    );
  }

  const firstPart = first(msg.payload.parts);

  if (!firstPart) {
    console.error(`First part is undefined, something'd definitely up`);
    return;
  }

  const msgHTML = decodeURIComponent(
    escape(atob(firstPart.body.data.replace(/\-/g, '+').replace(/\_/g, '/'))),
  );
  console.log('MSG HTML: ', msgHTML);
};
