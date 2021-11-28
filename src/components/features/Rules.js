import React from 'react'
import TopBar from './layouts/TopBar'
import Header from './layouts/Header'
import SocialRow from './layouts/SocialRow'
import IconRow from './layouts/IconRow'
import Footer from './layouts/Footer'
import {Container,Row,Col,Button} from 'react-bootstrap'
import { FaAngleLeft } from 'react-icons/fa';
import RulesSvg from './assets/icons/RulesSvg';
const Rules = () => {
    return (
      <>
        <TopBar/>
        <Header/> 
      <Container fluid className="bulbiranContainer"> 
      <div className="whiteBox pdc">
        <Row>
            <Col md={7} className="ta-right">
            <p className="brandShopTitle">قوانین و مقررات</p>
                <p className="brandShopDescription">
                بالبیران برای حریم شخصی کاربران خود احترام و ارزش ویژه ایی قائل است و تمام سعی و تلاش خود را برای ارائه خدماتی امن و مطمئن دارد. پیشنهاد می شود برای شفاف سازی روند فعالیت این وب سایت توضیحات زیر را مطالعه نمائید و در صورتی که در مورد هر یک از بندهای زیر و روند وب سایت، سوالی داشتید با ما تماس بگیرید تا شما را راهنمایی کنیم.
 بالبیران اطلاعات شخصی کاربران خود را محرمانه می داند و طبق قوانین تجارت الکترونیک کشور ایران آن اطلاعات را به فرد غیر، منتقل نمی کند. مگر اینکه با حکم قانونی مجبور باشد در اختیار مراجع ذیصلاح قرار دهد. به منظور بررسی و ارسال سفارش و یا ارائه خدمات، اطلاعاتی مانند آدرس، شماره تلفن و ایمیل مورد نیاز است. کلیه فعالیت‌های بالبیران با مجوزهای قانونی و مبتنی بر قوانین تجارت الکترونیک صورت می‌گیرد.
همچنین بالبیران همانند سایر وب سایت‌ها از جمع آوری IP و کوکی‌ها استفاده می‌کند اما پروتکل، سرور و لایه‌های امنیتی بالبیران و روش‌های مناسب مدیریت داده‌ها، اطلاعات کاربران را محافظت و از دسترسی‌های غیر قانونی جلوگیری می‌نماید.

                </p>
           
            </Col>
            <Col md={5} className="ta-left">
                <RulesSvg className="wRes85 ruleImg"/>
            </Col>
        </Row>
        <Row>
            <Col md={12}>
            <p className="rulesTitle">قوانین و مقررات استفاده از سرویس‌ها و خدمات بالبیران :</p>
                <p className="brandShopDescription w100">
                ورود کاربران به وب ‏‌سایت بالبیران هنگام استفاده از حساب کاربری، کارت های تخفیف و سایر خدمات ارائه شده توسط بالبیران به معنای آگاه بودن و پذیرفتن شرایط و قوانین و همچنین نحوه استفاده از سرویس‌‏ها و خدمات بالبیران است. توجه داشته باشید که ثبت سفارش نیز در هر زمان به معنی پذیرفتن کامل کلیه شرایط و قوانین بالبیران از سوی کاربر است.
                </p>
                <p className="rulesTitle">قوانین عمومی :</p>
                <p className="brandShopDescription w100">
                توجه داشته باشید کلیه اصول و رویه‏‌های بالبیران منطبق با قوانین کشور ایران، قانون تجارت الکترونیک و قانون حمایت از حقوق مصرف کننده است و متعاقباً کاربر نیز موظف به رعایت قوانین مرتبط با کاربر است.
در صورتی که در قوانین مندرج، رویه‏‌ها و سرویس‏‌های بالبیران تغییراتی ایجاد شود، در همین صفحه منتشر و به روز رسانی می شود و شما توافق می‏‌کنید که استفاده مستمر شما از سایت به معنی پذیرش هرگونه تغییر است.
                </p>
                <p className="rulesTitle">تعریف مشتری یا کاربر :</p>
                <p className="brandShopDescription w100">
                مشتری یا کاربر به شخصی گفته می‌شود که با اطلاعات کاربری که در فرم ثبت نام درج کرده است، به ثبت سفارش یا هرگونه استفاده از خدمات بالبیران اقدام نماید. </p>
                <p className="rulesTitle">ارتباطات الکترونیکی :</p>
                <p className="brandShopDescription w100">
                هنگام ثبت یا خرید سفارش اینترنتی یا ارسال ایمیل به بالبیران، این ارتباطات به صورت الکترونیکی انجام می شود و در صورتی که درخواست شما با رعایت کلیه اصول و رویه‏‌ها باشد، شما موافقت می‌‏کنید که بالبیران به صورت الکترونیکی (از طریق پست الکترونیکی) به درخواست شما پاسخ دهد. بالبیران به منظور ارتباط و ارائه خدمات هرچه بهتر و اطلاع رسانی رویدادها، اخبار، خدمات و سرویس‌های ویژه یا پیشنهادات ویژه به کاربران و اعضای خود، از ارسال ایمیل  استفاده می نماید .
توجه داشته باشید که بالبیران فقط از طریق ایمیل info@bulbiran.com  برای کاربران و مشتریان خود ایمیل ارسال می کند. بنابراین دریافت هرگونه ایمیل و یا پیامی تحت عنوان بالبیران، با هر شماره و یا ایمیل دیگری تخلف و سوء استفاده از نام بالبیران است و در صورت بروز چنین اتفاقی، لطفاً جهت پیگیری قانونی آن را به info@bulbiran.com اطلاع دهید.
 </p>
 <p className="rulesTitle">سیاست‏‌های رعایت حریم شخصی :</p>
                <p className="brandShopDescription w100">
                بالبیران به اطلاعات خصوصی اشخاصی که از خدمات سایت استفاده می‏‌کنند، احترام گذاشته و از آن محافظت می‏‌کند. اطلاعاتی که از کاربران هنگام ثبت سفارش یا ثبت نام گرفته می شود برای موارد زیر می تواند استفاده شود :
•	بهبود کیفیت خدمات ارائه شده برای کاربران 
•	بهبود روند ارائه محصولات در فروشگاه 
•	ارسال ایمیل محصولات جدید و پیشنهادات ویژه
بالبیران متعهد می‏‌شود در حد توان از حریم شخصی شما محافظت نماید و در این راستا از تکنولوژی های مورد نیاز برای اطمینان و امنیت و حفاظت هر چه بیشتر اطلاعات سایت استفاده می شود. شما کاربر گرامی با بازدید و استفاده از سایت بالبیران رضایت خود را از این سیاست نشان می‏‌دهید.
همه مطالب در دسترس از طریق هر یک از خدمات بالبیران مانند: متن، گرافیک، آرم، آیکون دکمه، تصاویر، موارد قابل دانلود و کپی، داده‌ها و کلیه محتوای تولید شده توسط بالبیران جزئی از اموال بالبیران  محسوب می‏‌شود و حق استفاده و نشر تمامی مطالب موجود و در دسترس در انحصار بالبیران است و هرگونه استفاده بدون کسب مجوز کتبی، حق پیگرد قانونی را برای بالبیران محفوظ می‏‌دارد. علاوه بر این، علائم تجاری ثبت شده نیز در انحصار بالبیران است و هر گونه استفاده از آن با مقاصد تجاری پیگرد قانونی دارد. کاربران مجاز به بهره‌‏برداری و استفاده از لیست محصولات، مشخصات فنی، قیمت و هر گونه استفاده از مشتقات وب‏‌سایت بالبیران و یا هر یک از خدمات و یا مطالب، دانلود یا کپی کردن اطلاعات با مقاصد تجاری، هر گونه استفاده از داده کاوی، ربات و یا روش‌‏های مشابه مانند جمع آوری داده‌‏ها و ابزارهای استخراج مجاز نیست و کلیه این حقوق به صراحت برای بالبیران محفوظ است.
در صورت استفاده از هر یک از خدمات بالبیران، کاربران مسئول حفظ محرمانه بودن حساب و رمز عبور خود هستند و تمامی مسئولیت فعالیت‌‏هایی که تحت حساب کاربری و یا رمز ورود انجام می‏‌پذیرد به عهده کاربران است.
هرگونه استفاده تجاری از اطلاعات سایت اعم از چاپ فروش و اجاره آن خلاف مقررات بالبیران است. برخی از مطالب سایت به دلایل امنیتی حفاظت شده بوده و تنها کاربران ثبت نام شده حق استفاده از آن را دارند. حق ثبت نام هر عضوی در سایت برای بالبیران محفوظ است. بالبیران قادر است در هر زمانی بدون هیچ اجازه ای خدمات خود را از کاربر متخلف قطع نموده و ناحیه کاربری وی را غیر فعال نماید. 
بعضی افراد سودجو با ساختن ایمیل هایی در Gmail و Yahoo  اقدام به سوء استفاده می نمایند لذا خواهشمند است پس از دریافت هر ایمیلی به اسم بالبیران روی آدرس ایمیل کلیک کرده و مطمئن شوید که از Gmail و Yahoo  ایمیلی دریافت نکرده اید، کابران تنها می‏‌توانند از آدرس‌‏های ذکر شده در بخش ارتباط با ما استفاده کنند.
بالبیران هیچ مسئولیت نسبت به انتقال ویروس از سایت به کامپیوتر کاربر را نمی پذیرد و این موضوع به عهده کاربر است که شرایط لازم برای امنیت خود در اینترنت را فراهم سازد. خواهشمند است در صورت دریافت ایمیل ها و یا درخواست های غیرعادی به اسم بالبیران قبل از هرگونه اقدام با ما بخش پشتیبانی ما تماس بگیرید.
 </p>
 <p className="rulesTitle">ثبت، هماهنگی و ارائه خدمات :</p>
                <p className="brandShopDescription w100">
                روز کاری به معنی روز شنبه تا پنجشنبه هر هفته، به استثنای تعطیلات عمومی در ایران است و کلیه سفارش‏‌های ثبت شده و خدمات در طول روزهای کاری و اولین روز پس از تعطیلات  ارائه می‌‏شوند. بالبیران به مشتریان خود در ۷ روز هفته و ۲۴ ساعت در روز امکان سفارش‌‏گذاری می‌‏دهد. بالبیران مجاز است بدون اطلاع قبلی نسبت به توقف سفارش‌‏گیری جدید، اقدام و فروش خود را متوقف کند، که البته کلیه سفارش‌‏های ثبت شده قبل از توقف سفارش‌‏گیری، آماده سازی و خدمات به صورت کامل  ارائه می‌‏شود. حق قطع فروش کلیه و یا بخشی از محصولات به هر دلیلی مانند قطع ارائه خدمات و فروش بدون اطلاع قبلی، برای بالبیران محفوظ است.
کاربران باید هنگام سفارش محصول مورد نظر خود، فرم سفارش را با اطلاعات صحیح و به طور کامل تکمیل کنند. بدیهی است در صورت ورود اطلاعات ناقص یا نادرست، سفارش کاربر قابل پیگیری و ارائه نخواهد بود. تمام حقوق و امتیازات یک کاربر از جمله سابقه تخفیفات و … به هیچ وجه قابل انتقال به غیر نمی باشد و در صورت تخلف مطابق قوانین با وی برخورد می شود.
با توجه به تغییرات فنی در برخی مدل های محصولات امکان تفاوت ویژگی های محصول جدید و قدیمی وجود دارد. بالبیران تمام سعی خود را در بروز رسانی اطلاعات محصول های خود دارد. اما مسئولیت تفاوت های حاصل از تغییرات شرکت سازنده در محصولات به عهده بالبیران نمی باشد.
</p>
<p className="rulesTitle">شرایط حمل و تحویل کالا :</p>
                <p className="brandShopDescription w100">
                حمل کلیه سفارشات خارج از تهران توسط تیپاکس و پست رسمی کشور و یا باربری صورت می پذیرد و فروشگاه اینترنتی بالبیران هیچ کنترلی بر زمان و فرآیند حمل توسط آن ها ندارد ولی بیشترین تلاش خود را در تحویل به موقع جهت هماهنگی انجام خواهد داد. ساعت تحویل کالای خریداری شده، بسته به زمان حضور مامور حمل و نقل در محل شما خواهد بود. متاسفانه فروشگاه اینترنتی بالبیران هیچ کنترلی بر ساعت تحویل مرسوله های شما توسط مامورین پست را ندارد و فقط می تواند پیشنهاد شما را در کنار نشانی محل تحویل درج نماید. در صورتی که فروشنده به دلایلی که خارج از اراده او می باشد، توان تحویل کالا را در موعد مقرر نداشته باشد و طرفین درباره یک موعد جدید به توافق نرسند، هریك از طرفین حق دارند بدون هیچگونه هزینه ای سفارش را فسخ نماید.
مکان تحویل کالا نشانی است که شما مشتری گرامی در حین ثبت سفارش در وب سایت درج می نمائید این نشانی بر روی کلیه مرسوله ها درج خواهد شد و تغییر نشانی پس از تحویل محموله به پیک به هیچ وجه قابل تغییر نمی باشد.

</p>
<p className="rulesTitle">کاربرانی که قصد ارسال نظر در سایت را دارند، حتما قوانین زیر را مد نظر داشته باشند :</p>
                <p className="brandShopDescription w100">
                با توجه به ساختار بخش نظرات، از پرسیدن سوال در این بخش جداً خودداری نمائید. هرگونه توهین به فرد یا افرادی منجر به عدم تائید نظر کاربر می‌شود. تمام کاربران حق دارند نظرات خود را به شرط رعایت قوانین در سایت منتشر کنند، لذا حتی اگر نظری را به دور از واقعیت، جانبدارانه یا اشتباه یافتید، نباید نظر دهنده را مخاطب قرار دهید یا از وی انتقاد نمائید، هر کاربر تنها می‌تواند نظر خود را بیان کند و قضاوت را به خوانندگان نظرات واگذار نماید. از بزرگنمایی یا اغراق درباره نقاط قوت یا نقاط ضعف محصول در نظرات خود خودداری نمائید.
<br/>
نام کاربری مشتریان عزیز باید شامل نام و نام خانوادگی فرد با حروف فارسی و یا انگلیسی باشد؛ لذا نظراتی که با نام کاربری غیر مجاز ارسال شده باشند (هرچند تمامی موارد دیگر رعایت شده باشد) حذف خواهند شد. با توجه به مسئولیت بالبیران در قبال لینک‌ سایت های دیگر؛ کاربران نباید لینک سایت‌های دیگر را در نظرات خود ثبت نمایند. کاربران دقت داشته باشند تا حتی الامکان از هرگونه لینک دادن (فرستادن) کاربران به سایت‌های دیگر خودداری نمایند.
<br/>
تنها نظراتی که مرتبط با محصول مورد نظر باشند، تائید خواهند شد، لذا از مطرح کردن بحث‌های متفرقه و غیر مرتبط با آن محصول خودداری نمائید. کاربران توجه داشته باشند مسائلی را که از آن اطمینان ندارند یا نسبت به آن شک دارند، به هیچ وجه در نظرات ثبت ننمایند و همچنین از باز نشر شایعات یا اطلاعات غیر مطمئن درباره محصولات جداً خودداری نمایند. ثبت اطلاعات ارتباطی شخصی، از جمله شماره تلفن یا آدرس ایمیل در قسمت نظرات ممنوع است، لذا از ثبت اینگونه اطلاعات ارتباطی در نظرات خود خودداری نمائید. لازم است کاربران مطالبی را ثبت نمایند که برای بازدیدکنندگان سایت مفید واقع شود و از بیان هرگونه مطالب شخصی، غیر مرتبط یا غیر ضروری در این بخش خودداری نمایند.
<br/>
لازم است کاربران نظرات خود را به صورت نگارشی و نه گفتاری ثبت نمایند و از کوتاه کردن کلمات یا استفاده از ادبیات عامیانه تا جای ممکن در ثبت نظرات خودداری نمایند، استفاده از ادبیات نوشتاری که قابلیت نمایش در سایت را داشته باشد، لازمه تائید نظرات کاربران است. کاربران در نظر داشته باشند که بالبیران ، به هیچ وجه نظری را ویرایش نخواهد کرد و قابلیت ویرایش نظر به هیچ وجه وجود ندارد، لذا خواهشند است قبل از ارسال نظر حتماٌ یکبار روی آن مرور نمائید. اگر قوانین ذکر شده، در نظرات کاربری رعایت نشود، نظر وی تائید نخواهد شد و در سایت نمایش داده نمی شود.
<br/>
با این حال، بالبیران  هیچگونه مسئولیتی در قبال صحت یا عدم صحت نظرات منتشر شده در این قسمت را ندارد. نمایش نظرات کاربران در سایت به هیچ وجه به معنی تائید فنی بالبیران درباره محتویات نظر نیست. لذا از کاربران محترم تقاضا می‌شود، نظرات را اصل و پایه انتخاب و تصمیم گیری خود قرار ندهند.
</p>
<p className="rulesTitle">محتوا :</p>
                <p className="brandShopDescription w100">
                بالبیران نهایت تلاش و دقت را در راستای ارائه تمامی سرویس‌‏های خود می‏‌کند و به منظور تولید محتوا از منابع و مراجع اصیل و نیز شرکت‏‌های سازنده محصولات استفاده می‏‌کند. لازم به ذکر است بالبیران تضمین نمی‏‌کند که توصیفات محصول و یا دیگر مطالب مندرج در سایت عاری از خطا باشد، اگر محصول ارائه شده توسط بالبیران دارای هر گونه مغایرت با اطلاعات درج شده در سایت است تنها راه حل، استرداد کالا قبل از استفاده و در شرایط اولیه است. وب ‏‌سایت بالبیران هیچگونه مسئولیتی را در رابطه با حذف شدن صفحه‏‌ های سایت خود و یا لینک‏‌های مرده را نمی‌‏پذیرد، سروﻳس‌‏های سایت آن‏گونه که هست ارائه می‏‌شود و سایت بالبیران تحت هیچ شرایطی مسئولیت تاخیر یا عدم کارکرد سایت را که می‌تواند ناشى از عوامل طبیعى، نیروى انسانی، مشکلات اینترنتى، خرابی تجهیزات کامپیوترى، مخابراتى و غیره باشد بر عهده ندارد.
                  <br/>
                  سایت بالبیران ممکن است دارای سرویس‌‏هایی با قابلیت مشارکت عمومی موسوم به سرویس‌‏های جمعی، همچون اتاق گفتگو، تابلوی اعلانات، تالار گفتگو، نقد، گروه‌‏های خبری، شبکه دوستان و سرویس‏‌های دیگری باشد که برای تسهیل ارتباط شما با دیگران (چه در مقیاس عمومی مثل تالار گفتگو و چه در مقیاس خصوصی مثل شبکه خصوصی دوستان) ارائه می‏‌شوند، شما توافق می‏‌کنید که از این سرویس‏‌های جمعی، فقط برای ثبت، ارسال و دریافت پیام‏‌هایی استفاده کنید که مناسب و مرتبط با آن سرویس خاص باشد.
©  کلیه محتویات سایت بالبیران شامل قانون حق تکثیر شده و به سایت بالبیران تعلق دارد.

                  </p> 
                  <p className="rulesTitle">قوه قهریه (فورس ماژور)</p>  
                  <p className="brandShopDescription w100">تمامی شرایط و قوانین مندرج، در شرایط عادی قابل اجرا است و در صورت بروز هرگونه از موارد قوه قهریه (فورس ماژور)، بالبیران هیچگونه مسئولیتی ندارد. بالبیران خود را ملزم به رعایت حریم شخصی کاربران می‌داند و سعی بر افزایش اعتماد عمومی در فضای آنلاین را دارد، لذا خواهشمند است در صورت مشاهده هرگونه تخلف، مورد مربوطه را به بالبیران اطلاع دهید و ما در ارائه خدمات بهتر یاری رسانید.</p>  
            </Col>
        </Row>
      </div>
          
     </Container>
     <SocialRow/>
    <IconRow/>
    <Footer/>
    </>
  );
};
export default Rules;