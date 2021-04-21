const emailTemplate = function(user){
    return`
    <table cellpadding="0" cellspacing="0" border="0" width="400">
    <tbody>
      <tr>
         <td style="font-family: Helvetica; font-weight: 600; color: #33234B; font-size: 12px;">${user.userName}</td>
      </tr>
      <tr>
        <td style="font-family: Helvetica; color: #33234B; font-size: 12px;">${user.userTitle}</td>
      </tr>
      <tr>
        <td style="font-family: Helvetica; font-size: 12px;"><a href="mailto:${user.userEmail}" style="color: #33234B;">${user.userEmail}</a></td>
      </tr>
      <tr>
        <td style="font-family: Helvetica; font-size: 12px; color: #33234B">713.942.7959 x${user.userExt}</td>
      </tr>
      <tr>
        <td height="13" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
      </tr>
      <tr>
        <td style="margin-top: 4px; font-family: Helvetica; font-size: 17px; color: #33234B;">Brand<b style="color: #3d85c6;">Extract</b><sup style="font-size: 12px; color: #C5D230;">▪</sup></td>
      </tr>
      <tr>
        <td style="font-family: Helvetica; color: #33234B; font-size: 12px;">1500 Bingle Road <br> Houston, TX 77055</td>
      </tr>
      <tr>
        <td style="font-family: Helvetica; font-size: 12px;"><a href="brandextract.com" style="color: #33234B;">brandextract.com</a></td>
      </tr>
      <tr>
        <td height="13" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
      </tr>
      <tr>
        <td><a style="font-family: Helvetica; color: #3d85c6; font-size: 12px; font-weight: bold; text-decoration: underline;" href="https://www.brandextract.com/15years/" target="_blank">Inspiring Belief for 15 Years</a></td>
      </tr>
       <tr>
        <td height="13" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
      </tr>
      <tr>
        <td style="font-family: Helvetica; font-size: 12px;"><a style="color: #33234B;" href="https://twitter.com/BrandExtract">Twitter</a> · 
              <a style="color: #33234B;" href="https://www.facebook.com/BrandExtract">
              Facebook</a> · 
              <a style="color: #33234B;" href="https://www.linkedin.com/company/brandextract-llc">LinkedIn</a></td>
      </tr>
       <tr>
        <td height="13" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
      </tr>
      <tr>
        <td style="font-family: Helvetica; font-size: 10px; color: #33234B">THIS EMAIL IS SUBJECT TO OUR <a style="color:3d85c6;" href="https://www.brandextract.com/Privacy/" target="_blank">PRIVACY AND CONFIDENTIALITY NOTICE.</a></td>
      </tr>
    </tbody>
  
  </table>
    `;
}