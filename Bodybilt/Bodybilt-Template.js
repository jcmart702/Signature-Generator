let optionalDivs = document.getElementById("inputs").getElementsByClassName("optional");

const emailTemplate = function(user){
    return`
    <table cellpadding="0" cellspacing="0" border="0" width="400">
        <tbody>
      <tr>
        <td style="font-family: Helvetica, Arial; font-size: 12px; margin: 0em; font-weight: bold; font-size: 13.333px; color: #15224d;">${inputDivs[0].lastElementChild.value !== "" ? user.userName : ``}</td>
      </tr>
      <tr>
        <td style="font-family: Helvetica, Arial; font-size: 12px; margin: 0em; font-size: 10pt; color: #959595;">${inputDivs[1].lastElementChild.value !== "" ? user.userTitle : ``}</td>
      </tr>
      <tr>
        <td height="5" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
      </tr>
        </tbody>
    </table>
      <table style="border-spacing: 0px;">
        <tbody>
            <tr>
                <td>${optionalDivs[0].lastElementChild.value !== "" ? `<strong style="text-transform: uppercase; font-size: 9.333px; color: #16224c;">Direct</strong></td> <td><span style="color: #5862aa; font-size: 12px;">${user.userDirect}</span></td>` : ``}</td>
            </tr>
            <tr>
                <td>${optionalDivs[1].lastElementChild.value !== "" ? `<strong style="text-transform: uppercase; font-size: 9.333px; color: #16224c;">Mobile</strong></td> <td><span style="color: #5862aa; font-size: 12px;">${user.userMobile}</span></td>` : ``}</td>
            </tr>
            <tr>
                <td>${inputDivs[2].lastElementChild.value !== "" ? `<strong style="text-transform: uppercase; font-size: 9.333px; color: #16224c;">Email</strong></td> <td><span style="color: #236995;"><a style="text-decoration: none; color: #236995;" href="mailto:${user.userEmail}" target="_blank">${user.userEmail}</a></span></td>` : ``}</td>
            </tr>
        </tbody>
      </table>
      <table style="border-spacing: 0px;">
        <tbody>
            <tr>
                <td height="3" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
            </tr>
            <tr>
                <td style="font-family: Helvetica, Arial; font-size: 12px; margin: 0em;"><span style="font-weight: bold; color: #16224c;">BodyBilt</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span style="color: #236995;"><a style="text-decoration: none; color: #236995;" href="http://www.bodybilt.com/" target="_blank">BodyBilt.com</a></span></td>
            </tr>
            <tr>
                <td style="font-family: Helvetica, Arial; font-size: 12px; margin: 0em; color: #5762ab;">One Bodybilt Place, Navasota, TX 77868</td>
            </tr> 
        </tbody>
      </table>

    </tbody>
  </table>
    `;
}