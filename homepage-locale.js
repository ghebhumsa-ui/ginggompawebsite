const homepageLocaleTargets = [
    ["nav.about", 'nav a[href="about.html"]'],
    ["nav.location", 'nav a[href="location.html"]'],
    ["nav.history", 'nav a[href="history.html"]'],
    ["nav.lineage", 'nav a[href="lineage.html"]'],
    ["nav.lhatsun", 'nav a[href="lhatsun.html"]'],
    ["nav.spiritual", 'nav a[href="spiritual.html"]'],
    ["nav.events", 'nav a[href="events.html"]'],
    ["nav.restoration", 'nav a[href="restoration.html"]'],
    ["nav.gallery", 'nav a[href="gallery.html"]'],
    ["nav.narratives", 'nav a[href="narratives.html"]'],
    ["nav.references", 'nav a[href="references.html"]'],
    ["nav.visit", 'nav a[href="visit.html"]'],
    ["nav.contact", 'nav a[href="contact.html"]'],
    ["nav.donate", 'nav a[href="donate.html"]'],
    ["language.button", ".language-menu-button"],
    ["hero.tagline", "#hero .tagline"],
    ["hero.summary", "#hero-content p:not(.tibetan-title):not(.tagline)"],
    ["identity.copy", ".identity-strip p"],
    ["saga.kicker", ".upcoming-event-copy .event-kicker"],
    ["saga.title", ".upcoming-event-copy h2"],
    ["saga.date", ".upcoming-event-copy .event-date"],
    ["saga.copy1", ".upcoming-event-copy p:nth-of-type(3)"],
    ["saga.copy2", ".upcoming-event-copy p:nth-of-type(4)"],
    ["saga.rsvp", ".upcoming-event-copy .event-rsvp"],
    ["gonjang.kicker", ".home-update-copy .event-kicker"],
    ["gonjang.title", ".home-update-copy h2"],
    ["gonjang.imageCaption", ".rinpoche-caption"],
    ["gonjang.p1", ".home-update-copy p:nth-of-type(2)"],
    ["gonjang.p2", ".home-update-copy p:nth-of-type(3)"],
    ["gonjang.p3", ".home-update-copy p:nth-of-type(4)"],
    ["gonjang.p4", ".home-update-copy p:nth-of-type(5)"],
    ["gonjang.p5", ".home-update-copy p:nth-of-type(6)"],
    ["gonjang.p6", ".home-update-copy p:nth-of-type(7)"],
    ["gonjang.p7", ".home-update-copy p:nth-of-type(8)"],
    ["gonjang.p8", ".home-update-copy p:nth-of-type(9)"],
    ["gonjang.p9", ".home-update-copy p:nth-of-type(10)"],
    ["gonjang.credit", ".home-update-copy .update-credit"],
    ["intent.copy", ".site-intent p"],
    ["footer.tagline", ".footer-tagline"],
    ["footer.copyright", "footer p:nth-of-type(3)"],
    ["footer.admin", ".site-admin"],
    ["footer.updated", ".footer-updated"]
];

const homepageTranslations = {
    ne: {
        "nav.about": "परिचय",
        "nav.location": "स्थान",
        "nav.history": "इतिहास",
        "nav.lineage": "वंश परम्परा",
        "nav.lhatsun": "ल्हात्सुन छेन्पो",
        "nav.spiritual": "आध्यात्मिक",
        "nav.events": "कार्यक्रम",
        "nav.restoration": "पुनर्स्थापना",
        "nav.gallery": "ग्यालरी",
        "nav.narratives": "वृत्तान्त",
        "nav.references": "सन्दर्भ",
        "nav.visit": "भ्रमण",
        "nav.contact": "सम्पर्क",
        "nav.donate": "सहयोग",
        "language.button": "भाषा",
        "hero.tagline": "दर्शनबाट मुक्ति (थोङ्द्रोल) को पवित्र स्थल",
        "hero.summary": "गिङ, दार्जिलिङमा अवस्थित ऐतिहासिक बौद्ध गुम्बा।",
        "identity.copy": "पेमायाङ्त्सेसँग सम्बन्धित ञिङमा गुम्बा, जसको अभिलेखित इतिहास उन्नाइसौं शताब्दीको प्रारम्भसम्म पुग्छ।",
        "saga.kicker": "आगामी कार्यक्रम",
        "saga.title": "सागा दावा उत्सव",
        "saga.date": "३१ मे २०२६",
        "saga.copy1": "प्रिय धर्म मित्रहरू र श्रद्धालुहरू, गिङ, दार्जिलिङ, पश्चिम बंगालस्थित साङ्छेन थोङ्द्रोलिङ गुम्बामा हुने पवित्र सागा दावा उत्सवमा तपाईंहरूलाई हार्दिक निमन्त्रणा छ।",
        "saga.copy2": "परम पूज्य दशौं क्याब्जे गोन्जाङ रिन्पोछेले यस शुभ अवसरको अध्यक्षता गर्न विनम्र अनुरोध स्वीकार गर्नुभएको छ र सबै श्रद्धालुहरूलाई दीर्घायु प्रार्थना तथा आशीर्वाद प्रदान गर्नुहुनेछ।",
        "saga.rsvp": "RSVP: वेन. याप लोपेन येशे दोर्जी भुटिया र समिति सदस्यहरू",
        "gonjang.kicker": "सागा दावा अपडेट",
        "gonjang.title": "गोन्जाङ गुम्बाको इतिहास",
        "gonjang.imageCaption": "परम पावन दशौं क्याब्जे गोन्जाङ रिन्पोछे",
        "gonjang.p1": "दुई सय वर्षभन्दा अघि, छैटौं गोन्जाङ अवतार रिग्जिन पद्म छ्योफेलको समयमा, तिब्बतको त्साङ क्षेत्रमा गोन्जाङ गुम्बा स्थापना गरिएको थियो। क्रमिक अवतारहरू मार्फत बहुमूल्य बुद्ध धर्म निरन्तर संरक्षण, रक्षा र प्रचार हुँदै आयो।",
        "gonjang.p2": "पछि सन् १९५६ मा, तिब्बतको दुःखद समय दुष्ट शक्तिहरूको क्रूरता र दमनबाट परिपक्व हुँदा, नवौं गोन्जाङ रिन्पोछे ङावाङ योन्तेन ग्यात्सो पनि शान्तिपूर्वक परिनिर्वाणमा प्रवेश गर्नुभयो। त्यसपछि उहाँका शिष्य र अनुयायीहरूले पुनर्जन्मको खोजी गरे। मन्त्र र ध्यानका महान आचार्य क्याब्जे दुद्जोम जिग्द्राल येशे दोर्जे, गुरु पद्मसम्भवका प्रतिनिधि, द्वारा दिइएको भविष्यवाणी र मान्यताअनुसार, वर्तमान गोन्जाङ तुल्कु रिन्पोछेलाई सिक्किमको लुकेको पवित्र भूमिमा, पूर्वी लुकेको उपत्यकामा गुरु रिन्पोछेको पवित्र गुफाको उत्तरतर्फ, पहिचान गरियो।",
        "gonjang.p3": "यो मान्यता पछि परम पावन १४औं दलाई लामा र दुवै परम पावन कर्मापाहरूले सर्वसम्मत रूपमा पुष्टि गर्नुभयो। त्यसपछि दिवंगत रिन्पोछेका सेवक माथा द्रोल दोर्जे र शिष्यहरूले उहाँको हेरचाह र शिक्षाको जिम्मेवारी लिए।",
        "gonjang.p4": "वर्तमान गोन्जाङ रिन्पोछेले क्याब्जे दुद्जोम रिन्पोछेबाट काङ्ग्युरको मौखिक प्रसारण, क्याब्जे दिल्गो ख्येन्त्से रिन्पोछेबाट ञिङमा कामा परम्पराका अभिषेक र शिक्षा, र क्याब्जे ताकलुङ त्सेत्रुल रिन्पोछेबाट उत्तरी खजाना (जाङ्तेर) परम्पराका अभिषेक, प्रसारण र निर्देशनहरू, अभ्यास चक्रका तीन भाग र जोग्छेन गोङ्पा जाङ्थल सहित, प्राप्त गर्नुभयो।",
        "gonjang.p5": "विशेष गरी, महान करुणामय क्याब्जे दोद्रुपछेन रिन्पोछेबाट उहाँले पढाइ र लेखाइदेखि सुरु गरेर कामा र तेर्मा परम्पराका अभिषेक र प्रसारण, जोग्छेन ञिङ्थिगका चार चक्र, जिग्लिङ सुंगबुम, ञिङ्थिग मूल ग्रन्थहरू र इन्द्रेणी शरीर शिक्षाका छ खण्डहरू सम्म विस्तृत शिक्षा प्राप्त गर्नुभयो। दोद्रुपछेन रिन्पोछेको मार्गदर्शनमा उहाँले पेमा ओलिङ रिट्रिट केन्द्रमा तीन वर्षे साधना पूरा गर्नुभयो, मुख्यतः लोङ्छेन ञिङ्थिगको अभ्यास गर्दै उज्यालो महान पूर्णता (जोग्छेन) को ध्यान र अनुभूतिमा गहिरो रूपमा संलग्न हुनुभयो।",
        "gonjang.p6": "सन् १९८१ मा, परम पावन दलाई लामा गान्तोक, सिक्किम भ्रमण गर्नुहुँदा, उहाँले भूमिमा आशीर्वाद प्रदान गरी गोन्जाङ गुम्बाको नयाँ मुख्य मन्दिर, ओरग्येन दो-ङग छ्योखोर लिङ, निर्माणका लागि शिलान्यास गर्नुभयो। माथा द्रोल दोर्जेको प्रमुख जिम्मेवारीमा गुम्बाको मुख्य मन्दिर तथा वंश गुरु, आचार्य, शिक्षक र पच्चीस शिष्यका पवित्र मूर्तिहरू सफलतापूर्वक सम्पन्न गरिए।",
        "gonjang.p7": "त्यस्तै, दार्जिलिङमा वर्तमान तुल्कुको नेतृत्वमा महान विद्याधरहरूको परम्परा क्षय नभई कायम राखिएको छ। करिब चालीस जना भिक्षु र साधकहरूले शुद्ध अनुशासन र सौहार्द कायम राख्दै नियमित मासिक दशमी गुरु रिन्पोछे अभ्यास, बुद्ध शाक्यमुनिद्वारा आशीर्वादित चार महान बौद्ध पर्व, महान आचार्यहरूको स्मृति समारोह, र उत्तरी खजाना परम्पराका महत्वपूर्ण अनुष्ठानहरू गर्दै आएका छन्।",
        "gonjang.p8": "निरन्तर गरिँदै आएका प्रमुख अभ्यासहरूमा अवलोकितेश्वरको बाह्य अभ्यास, 'सबै प्राणीहरूको मुक्ति'; आन्तरिक गुरु विद्याधर अभ्यास; गुप्त क्रोधित अभ्यास; र आठ हेरुकाका क्रोधित अनुष्ठानहरू तथा अन्य पवित्र समारोहहरू पर्दछन्। यी परम्पराहरू आजसम्म अविच्छिन्न रूपमा जारी छन्।",
        "gonjang.p9": "विशेष गरी, तिब्बती चन्द्र पात्रोको नवौं महिनाको २२औं दिनदेखि प्रत्येक वर्ष दस दिनको भव्य वज्रकिलय ड्रुप्छेन आयोजना गरिन्छ। २९औं दिनमा तोर्मा अर्पण, ३०औं दिनमा अग्नि पूजा र समापन कार्यहरू, र अर्को महिनाको १औं दिनमा विस्तृत जाङ्तेर साङ अर्पण गरिन्छ। यी व्यापक आध्यात्मिक गतिविधिहरू मार्फत गुम्बाले महान समर्पण र करुणाका साथ बुद्धका बहुमूल्य शिक्षाहरूलाई निरन्तर धारण र फैलाउँदै आएको छ।",
        "gonjang.credit": "वेन. याप लोपेन येशे दोर्जी भुटिया",
        "intent.copy": "यो वेबसाइट साङ्छेन थोङ्द्रोल लिङको इतिहास, परम्परा र जीवित अभ्यासलाई दस्तावेजीकरण गर्ने निरन्तर अभिलेख प्रयास हो।",
        "footer.tagline": "दर्शनबाट मुक्ति",
        "footer.copyright": "© साङ्छेन थोङ्द्रोल लिङ गुम्बा",
        "footer.admin": "साइट प्रशासक: admin@ginggompa.org",
        "footer.updated": "अन्तिम अद्यावधिक: १९/मे/२०२६"
    },
    hi: {
        "nav.about": "परिचय",
        "nav.location": "स्थान",
        "nav.history": "इतिहास",
        "nav.lineage": "वंश परंपरा",
        "nav.lhatsun": "ल्हात्सुन छेनपो",
        "nav.spiritual": "आध्यात्मिक",
        "nav.events": "कार्यक्रम",
        "nav.restoration": "पुनर्स्थापना",
        "nav.gallery": "गैलरी",
        "nav.narratives": "वृत्तांत",
        "nav.references": "संदर्भ",
        "nav.visit": "भ्रमण",
        "nav.contact": "संपर्क",
        "nav.donate": "सहयोग",
        "language.button": "भाषा",
        "hero.tagline": "दर्शन से मुक्ति (थोंगद्रोल) का पवित्र स्थल",
        "hero.summary": "गिंग, दार्जिलिंग में स्थित एक ऐतिहासिक बौद्ध मठ।",
        "identity.copy": "पेमायांग्त्से से संबद्ध न्यिंगमा मठ, जिसका अभिलेखित इतिहास उन्नीसवीं शताब्दी के प्रारंभ तक जाता है।",
        "saga.kicker": "आगामी कार्यक्रम",
        "saga.title": "सागा दावा उत्सव",
        "saga.date": "31 मई 2026",
        "saga.copy1": "प्रिय धर्म मित्रों और श्रद्धालुओं, गिंग, दार्जिलिंग, पश्चिम बंगाल स्थित साङ्छेन थोंगद्रोलिंग मठ में होने वाले पवित्र सागा दावा उत्सव में आपका हार्दिक स्वागत है।",
        "saga.copy2": "परम पूज्य दसवें क्याब्जे गोन्जांग रिनपोछे ने इस शुभ अवसर की अध्यक्षता करने का विनम्र अनुरोध स्वीकार किया है और सभी श्रद्धालुओं को दीर्घायु प्रार्थना तथा आशीर्वाद प्रदान करेंगे।",
        "saga.rsvp": "RSVP: वेन. याप लोपेन येशे दोर्जी भूटिया और समिति सदस्य",
        "gonjang.kicker": "सागा दावा अपडेट",
        "gonjang.title": "गोन्जांग मठ का इतिहास",
        "gonjang.imageCaption": "परम पावन दसवें क्याब्जे गोन्जांग रिनपोछे",
        "gonjang.p1": "दो सौ वर्ष से अधिक पहले, छठे गोन्जांग अवतार रिग्जिन पद्म छोफेल के समय, तिब्बत के त्सांग क्षेत्र में गोन्जांग मठ की स्थापना हुई। क्रमिक अवतारों के माध्यम से बहुमूल्य बुद्ध धर्म निरंतर संरक्षित, सुरक्षित और प्रचारित होता रहा।",
        "gonjang.p2": "बाद में, वर्ष 1956 में, जब तिब्बत का दुखद समय दुष्ट शक्तियों की क्रूरता और दमन के अधीन परिपक्व हुआ, नवें गोन्जांग रिनपोछे ङावांग योनतेन ग्यात्सो भी शांतिपूर्वक परिनिर्वाण में प्रवेश कर गए। इसके बाद उनके शिष्यों और अनुयायियों ने उनके पुनर्जन्म की खोज की। मंत्र और ध्यान के महान आचार्य क्याब्जे दुद्जोम जिग्द्राल येशे दोर्जे, गुरु पद्मसम्भव के प्रतिनिधि, द्वारा दी गई भविष्यवाणी और मान्यता के अनुसार, वर्तमान गोन्जांग तुल्कु रिनपोछे की पहचान सिक्किम की गुप्त पवित्र भूमि में, पूर्वी गुप्त घाटी में गुरु रिनपोछे की पवित्र गुफा के उत्तर की ओर, की गई।",
        "gonjang.p3": "इस मान्यता की बाद में परम पावन 14वें दलाई लामा और दोनों परम पावन कर्मापाओं ने सर्वसम्मति से पुष्टि की। इसके बाद दिवंगत रिनपोछे के परिचर माथा द्रोल दोर्जे और शिष्यों ने उनकी देखभाल और शिक्षा की जिम्मेदारी संभाली।",
        "gonjang.p4": "वर्तमान गोन्जांग रिनपोछे ने क्याब्जे दुद्जोम रिनपोछे से कांग्युर का मौखिक प्रसारण, क्याब्जे दिल्गो ख्येन्त्से रिनपोछे से न्यिंगमा कामा परंपरा के अभिषेक और शिक्षाएं, तथा क्याब्जे ताकलुंग त्सेत्रुल रिनपोछे से उत्तरी खजाना (जांगतेर) परंपरा के अभिषेक, प्रसारण और निर्देश प्राप्त किए, जिनमें अभ्यास चक्रों के तीन भाग और जोग्छेन गोङ्पा जाङ्थल भी शामिल हैं।",
        "gonjang.p5": "विशेष रूप से, महान करुणामय क्याब्जे दोद्रुपछेन रिनपोछे से उन्होंने पढ़ना-लिखना से आरंभ होकर कामा और तेर्मा परंपराओं के अभिषेक और प्रसारण, जोग्छेन न्यिंगथिग के चार चक्र, जिग्लिंग सुंगबुम, न्यिंगथिग मूल ग्रंथ और इंद्रधनुषी शरीर की शिक्षाओं के छह खंडों तक विस्तृत शिक्षाएं प्राप्त कीं। दोद्रुपछेन रिनपोछे के मार्गदर्शन में उन्होंने पेमा ओलिंग रिट्रीट केंद्र में तीन वर्ष का साधना-वास पूरा किया, मुख्यतः लोंगचेन न्यिंगथिग का अभ्यास करते हुए उज्ज्वल महान पूर्णता (जोग्छेन) के ध्यान और अनुभूति में गहराई से संलग्न रहे।",
        "gonjang.p6": "वर्ष 1981 में, जब परम पावन दलाई लामा गंगटोक, सिक्किम आए, उन्होंने भूमि को आशीर्वाद दिया और गोन्जांग मठ के नए मुख्य मंदिर, ओरग्येन दो-ङग छ्योखोर लिंग, के निर्माण की नींव रखी। माथा द्रोल दोर्जे की मुख्य जिम्मेदारी में मठ का मुख्य मंदिर तथा वंश गुरु, आचार्य, शिक्षक और पच्चीस शिष्यों की पवित्र मूर्तियां सफलतापूर्वक पूर्ण हुईं।",
        "gonjang.p7": "इसी प्रकार, दार्जिलिंग में वर्तमान तुल्कु के नेतृत्व में महान विद्याधरों की परंपराएं अवनति के बिना बनी हुई हैं। लगभग चालीस भिक्षु और साधक शुद्ध अनुशासन और सामंजस्य बनाए रखते हुए नियमित मासिक दशमी गुरु रिनपोछे अभ्यास, बुद्ध शाक्यमुनि द्वारा आशीर्वादित चार महान बौद्ध पर्व, महान आचार्यों की स्मृति सभाएं और उत्तरी खजाना परंपरा के महत्वपूर्ण अनुष्ठान करते रहते हैं।",
        "gonjang.p8": "निरंतर किए जाने वाले प्रमुख अभ्यासों में अवलोकितेश्वर की बाहरी साधना, 'सभी प्राणियों की मुक्ति'; आंतरिक गुरु विद्याधर साधना; गुप्त क्रोधी साधना; और आठ हेरुकाओं के क्रोधी अनुष्ठान तथा अन्य पवित्र समारोह शामिल हैं। ये परंपराएं आज तक अविच्छिन्न रूप से जारी हैं।",
        "gonjang.p9": "विशेष रूप से, तिब्बती चंद्र मास के नौवें महीने के 22वें दिन से प्रतिवर्ष दस दिवसीय भव्य वज्रकिलय ड्रुपछेन आयोजित होता है। 29वें दिन तोर्मा अर्पण, 30वें दिन अग्नि पूजा और समापन क्रियाएं, और अगले महीने के पहले दिन विस्तृत जांगतेर सांग अर्पण किया जाता है। इन विशाल आध्यात्मिक गतिविधियों के माध्यम से मठ महान समर्पण और करुणा के साथ बुद्ध की बहुमूल्य शिक्षाओं को धारण और प्रसारित करता रहता है।",
        "gonjang.credit": "वेन. याप लोपेन येशे दोर्जी भूटिया",
        "intent.copy": "यह वेबसाइट साङ्छेन थोंगद्रोल लिंग के इतिहास, परंपराओं और जीवित साधना का दस्तावेजीकरण करने वाला सतत अभिलेख प्रयास है।",
        "footer.tagline": "दर्शन से मुक्ति",
        "footer.copyright": "© साङ्छेन थोंगद्रोल लिंग मठ",
        "footer.admin": "साइट प्रशासक: admin@ginggompa.org",
        "footer.updated": "अंतिम अद्यतन: 19/मई/2026"
    }
};

function setLanguageMenuOpen(isOpen) {
    const button = document.querySelector(".language-menu-button");
    const panel = document.getElementById("homepage-language-panel");

    if (!button || !panel) {
        return;
    }

    button.setAttribute("aria-expanded", String(isOpen));
    panel.hidden = !isOpen;
}

function setHomepageLanguage(language) {
    const selectedLanguage = homepageTranslations[language] ? language : "en";

    document.documentElement.lang = selectedLanguage;

    homepageLocaleTargets.forEach(function(target) {
        const key = target[0];
        const element = document.querySelector(target[1]);

        if (!element) {
            return;
        }

        if (!element.dataset.i18nDefault) {
            element.dataset.i18nDefault = element.innerHTML;
        }

        const translatedText = homepageTranslations[selectedLanguage] && homepageTranslations[selectedLanguage][key];
        element.innerHTML = translatedText || element.dataset.i18nDefault;
    });

    document.querySelectorAll("[data-home-lang]").forEach(function(button) {
        const isActive = button.getAttribute("data-home-lang") === selectedLanguage;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });

    localStorage.setItem("gingGompaHomepageLanguage", selectedLanguage);
}

document.addEventListener("DOMContentLoaded", function() {
    const savedLanguage = localStorage.getItem("gingGompaHomepageLanguage") || "en";
    const menuButton = document.querySelector(".language-menu-button");

    setHomepageLanguage(savedLanguage);

    if (menuButton) {
        menuButton.addEventListener("click", function(event) {
            event.stopPropagation();
            setLanguageMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
        });
    }

    document.querySelectorAll("[data-home-lang]").forEach(function(button) {
        button.addEventListener("click", function() {
            setHomepageLanguage(button.getAttribute("data-home-lang"));
            setLanguageMenuOpen(false);
        });
    });

    document.addEventListener("click", function(event) {
        if (!event.target.closest(".header-language")) {
            setLanguageMenuOpen(false);
        }
    });
});

window.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        setLanguageMenuOpen(false);
    }
});
