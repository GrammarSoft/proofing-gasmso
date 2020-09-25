
import {OutlookHtmlHandler} from './outlook-html-handler';
import {OutlookTextHandler} from './outlook-text-handler';
// window.outlookDom = new OutlookDom();
window.outlookHtmlHandler = OutlookHtmlHandler;
window.outlookTextHandler = OutlookTextHandler;
window.outlookContentHandler = null;

// window.outlookContentHandler = new window.outlookHtmlHandler('Html');

// let html = `<span>
// <div style="font-family:Calibri,Arial,Helvetica,sans-serif; font-size:12pt; color:rgb(0,0,0)">
// <span>
//     <span class="x_x_x_x_x_x_x_x_grammarsoft_inserted">Budskab</span>
//     <span class="x_x_x_x_x_x_x_x_grammarsoft_inserted">
//         <span class="x_x_x_x_x_x_grammarsoft_inserted"> drukner i</span>
//         <span class="x_x_x_x_x_x_grammarsoft_inserted">stavefejl</span>
//         <span class="x_x_x_x_x_x_grammarsoft_inserted">
//             <span class="x_x_x_x_grammarsoft_inserted"> hvis man ikke er </span>
//             <span class="x_x_x_x_grammarsoft_inserted">opmærksom</span>
//             <span class="x_x_x_x_grammarsoft_inserted">
//                 <span class="x_x_grammarsoft_inserted"> på sine egne sproglige </span>
//                 <span class="x_x_grammarsoft_inserted">svagheder</span>
//                 <span class="x_x_grammarsoft_inserted">
//                     <span class="grammarsoft_inserted">, hvordan skal man så komme til at skrive mere </span>
//                     <span class="grammarsoft_inserted" style="border: 3px dotted #419641;" data-grammarsoft="selected">korekt</span>
//                     <span class="grammarsoft_inserted"> dansk? Man skal ikke skrive korrekt kun for korrekthedens
//                                 skyld. Man skal gøre sig umage for at skrive korrekt, fordi sproget siger noget om
//                                 tekstens ophasmand. vi bruger sproget til at komunikere med, og uanset om din
//                                 kommunikation foregår i uformelle sammenhænge såsom mails til venner og kolleger eller i
//                                 vigtige dokumenter som jobansøgninger eller studieopgaver, giver dårligt sprog aldrig et
//                                 godt indtryk. Hvem vil ikke gerne tages alvorlig, når de kommunikerer på skrift? Og hvem
//                                 ønsker at se deres budskab drukne i en dyb sø af stavefejl og grammatiske
//                                 bommerter?
//                     </span>
//                 </span>
//             </span>
//         </span>
//     </span>
// </span>
// <br>
// </div>
// </span>`;

// window.outlookContentHandler.deSpanTest(html);