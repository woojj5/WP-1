function getCsvData() {
    var csv = `date,name,price
2018-09-03,KB금융,51300
2018-09-03,KT,28900
2018-09-03,KT&G,101500
2018-09-03,LG,71100
2018-09-03,LG생활건강,1254000
2018-09-03,LG전자,76700
2018-09-03,LG화학,368000
2018-09-03,NAVER,754000
2018-09-03,POSCO,319500
2018-09-03,S-Oil,121000
2018-09-03,SK,261000
2018-09-03,SK이노베이션,194500
2018-09-03,SK텔레콤,256500
2018-09-03,SK하이닉스,80600
2018-09-03,기아차,31800
2018-09-03,넷마블,116500
2018-09-03,삼성SDI,242500
2018-09-03,삼성물산,123500
2018-09-03,삼성생명,92400
2018-09-03,삼성에스디에스,240000
2018-09-03,삼성전자,47450
2018-09-03,삼성화재,264000
2018-09-03,신한지주,43900
2018-09-03,아모레퍼시픽,259500
2018-09-03,엔씨소프트,385500
2018-09-03,카카오,121500
2018-09-03,하나금융지주,42750
2018-09-03,한국전력,30300
2018-09-03,현대모비스,226500
2018-09-03,현대차,125000
2018-09-04,KB금융,51400
2018-09-04,KT,28700
2018-09-04,KT&G,100500
2018-09-04,LG,71600
2018-09-04,LG생활건강,1259000
2018-09-04,LG전자,78100
2018-09-04,LG화학,367500
2018-09-04,NAVER,755000
2018-09-04,POSCO,316500
2018-09-04,S-Oil,120500
2018-09-04,SK,262500
2018-09-04,SK이노베이션,193000
2018-09-04,SK텔레콤,262000
2018-09-04,SK하이닉스,81200
2018-09-04,기아차,31600
2018-09-04,넷마블,119000
2018-09-04,삼성SDI,245000
2018-09-04,삼성물산,125000
2018-09-04,삼성생명,92100
2018-09-04,삼성에스디에스,240500
2018-09-04,삼성전자,47650
2018-09-04,삼성화재,262500
2018-09-04,신한지주,43850
2018-09-04,아모레퍼시픽,260500
2018-09-04,엔씨소프트,406000
2018-09-04,카카오,122000
2018-09-04,하나금융지주,42950
2018-09-04,한국전력,29950
2018-09-04,현대모비스,226500
2018-09-04,현대차,126500
2018-09-05,KB금융,50400
2018-09-05,KT,28900
2018-09-05,KT&G,99600
2018-09-05,LG,71100
2018-09-05,LG생활건강,1254000
2018-09-05,LG전자,76200
2018-09-05,LG화학,358000
2018-09-05,NAVER,736000
2018-09-05,POSCO,309500
2018-09-05,S-Oil,119000
2018-09-05,SK,260000
2018-09-05,SK이노베이션,191500
2018-09-05,SK텔레콤,262500
2018-09-05,SK하이닉스,80000
2018-09-05,기아차,32200
2018-09-05,넷마블,116000
2018-09-05,삼성SDI,242500
2018-09-05,삼성물산,125000
2018-09-05,삼성생명,90900
2018-09-05,삼성에스디에스,238500
2018-09-05,삼성전자,46600
2018-09-05,삼성화재,260500
2018-09-05,신한지주,42450
2018-09-05,아모레퍼시픽,261000
2018-09-05,엔씨소프트,394000
2018-09-05,카카오,121000
2018-09-05,하나금융지주,42400
2018-09-05,한국전력,30050
2018-09-05,현대모비스,226500
2018-09-05,현대차,129000
2018-09-06,KB금융,50500
2018-09-06,KT,29000
2018-09-06,KT&G,99800
2018-09-06,LG,71300
2018-09-06,LG생활건강,1236000
2018-09-06,LG전자,74400
2018-09-06,LG화학,351000
2018-09-06,NAVER,730000
2018-09-06,POSCO,308500
2018-09-06,S-Oil,120500
2018-09-06,SK,266000
2018-09-06,SK이노베이션,191000
2018-09-06,SK텔레콤,261500
2018-09-06,SK하이닉스,78800
2018-09-06,기아차,33650
2018-09-06,넷마블,114000
2018-09-06,삼성SDI,242000
2018-09-06,삼성물산,126500
2018-09-06,삼성생명,91800
2018-09-06,삼성에스디에스,239000
2018-09-06,삼성전자,46100
2018-09-06,삼성화재,260000
2018-09-06,신한지주,42150
2018-09-06,아모레퍼시픽,261000
2018-09-06,엔씨소프트,399500
2018-09-06,카카오,120000
2018-09-06,하나금융지주,41850
2018-09-06,한국전력,30200
2018-09-06,현대모비스,231500
2018-09-06,현대차,134000
2018-09-07,KB금융,50700
2018-09-07,KT,28950
2018-09-07,KT&G,101000
2018-09-07,LG,71500
2018-09-07,LG생활건강,1226000
2018-09-07,LG전자,74300
2018-09-07,LG화학,352000
2018-09-07,NAVER,732000
2018-09-07,POSCO,308000
2018-09-07,S-Oil,119000
2018-09-07,SK,266500
2018-09-07,SK이노베이션,192500
2018-09-07,SK텔레콤,263500
2018-09-07,SK하이닉스,75900
2018-09-07,기아차,34250
2018-09-07,넷마블,113000
2018-09-07,삼성SDI,239000
2018-09-07,삼성물산,125000
2018-09-07,삼성생명,93000
2018-09-07,삼성에스디에스,242500
2018-09-07,삼성전자,44900
2018-09-07,삼성화재,267000
2018-09-07,신한지주,42200
2018-09-07,아모레퍼시픽,263000
2018-09-07,엔씨소프트,414500
2018-09-07,카카오,120000
2018-09-07,하나금융지주,41850
2018-09-07,한국전력,30250
2018-09-07,현대모비스,237000
2018-09-07,현대차,133000
2018-09-10,KB금융,51000
2018-09-10,KT,28450
2018-09-10,KT&G,101500
2018-09-10,LG,70900
2018-09-10,LG생활건강,1200000
2018-09-10,LG전자,73100
2018-09-10,LG화학,347000
2018-09-10,NAVER,725000
2018-09-10,POSCO,304000
2018-09-10,S-Oil,121500
2018-09-10,SK,267000
2018-09-10,SK이노베이션,199500
2018-09-10,SK텔레콤,265500
2018-09-10,SK하이닉스,76500
2018-09-10,기아차,34000
2018-09-10,넷마블,113500
2018-09-10,삼성SDI,244000
2018-09-10,삼성물산,125500
2018-09-10,삼성생명,92600
2018-09-10,삼성에스디에스,242000
2018-09-10,삼성전자,45500
2018-09-10,삼성화재,263000
2018-09-10,신한지주,42000
2018-09-10,아모레퍼시픽,257500
2018-09-10,엔씨소프트,423500
2018-09-10,카카오,119000
2018-09-10,하나금융지주,41900
2018-09-10,한국전력,30250
2018-09-10,현대모비스,227000
2018-09-10,현대차,131000
2018-09-11,KB금융,51100
2018-09-11,KT,28650
2018-09-11,KT&G,102500
2018-09-11,LG,70900
2018-09-11,LG생활건강,1196000
2018-09-11,LG전자,72800
2018-09-11,LG화학,341000
2018-09-11,NAVER,726000
2018-09-11,POSCO,292000
2018-09-11,S-Oil,126000
2018-09-11,SK,267000
2018-09-11,SK이노베이션,202500
2018-09-11,SK텔레콤,271500
2018-09-11,SK하이닉스,76600
2018-09-11,기아차,34050
2018-09-11,넷마블,112500
2018-09-11,삼성SDI,249500
2018-09-11,삼성물산,126000
2018-09-11,삼성생명,92000
2018-09-11,삼성에스디에스,243000
2018-09-11,삼성전자,45050
2018-09-11,삼성화재,260000
2018-09-11,신한지주,42050
2018-09-11,아모레퍼시픽,256500
2018-09-11,엔씨소프트,425000
2018-09-11,카카오,116500
2018-09-11,하나금융지주,42200
2018-09-11,한국전력,30350
2018-09-11,현대모비스,222500
2018-09-11,현대차,128000
2018-09-12,KB금융,51400
2018-09-12,KT,29150
2018-09-12,KT&G,102500
2018-09-12,LG,71600
2018-09-12,LG생활건강,1201000
2018-09-12,LG전자,72100
2018-09-12,LG화학,343500
2018-09-12,NAVER,730000
2018-09-12,POSCO,291500
2018-09-12,S-Oil,125500
2018-09-12,SK,269500
2018-09-12,SK이노베이션,201500
2018-09-12,SK텔레콤,274000
2018-09-12,SK하이닉스,75100
2018-09-12,기아차,34400
2018-09-12,넷마블,115000
2018-09-12,삼성SDI,247500
2018-09-12,삼성물산,125000
2018-09-12,삼성생명,91600
2018-09-12,삼성에스디에스,241500
2018-09-12,삼성전자,44550
2018-09-12,삼성화재,261500
2018-09-12,신한지주,42750
2018-09-12,아모레퍼시픽,257500
2018-09-12,엔씨소프트,423500
2018-09-12,카카오,120000
2018-09-12,하나금융지주,42500
2018-09-12,한국전력,30300
2018-09-12,현대모비스,222000
2018-09-12,현대차,129500
2018-09-13,KB금융,52200
2018-09-13,KT,28850
2018-09-13,KT&G,102500
2018-09-13,LG,71400
2018-09-13,LG생활건강,1182000
2018-09-13,LG전자,71500
2018-09-13,LG화학,350000
2018-09-13,NAVER,723000
2018-09-13,POSCO,293000
2018-09-13,S-Oil,128500
2018-09-13,SK,278000
2018-09-13,SK이노베이션,201500
2018-09-13,SK텔레콤,276000
2018-09-13,SK하이닉스,74500
2018-09-13,기아차,34150
2018-09-13,넷마블,117000
2018-09-13,삼성SDI,238500
2018-09-13,삼성물산,124000
2018-09-13,삼성생명,91600
2018-09-13,삼성에스디에스,244500
2018-09-13,삼성전자,44050
2018-09-13,삼성화재,258000
2018-09-13,신한지주,43200
2018-09-13,아모레퍼시픽,259000
2018-09-13,엔씨소프트,435000
2018-09-13,카카오,121000
2018-09-13,하나금융지주,43800
2018-09-13,한국전력,29950
2018-09-13,현대모비스,221000
2018-09-13,현대차,128500
2018-09-14,KB금융,51100
2018-09-14,KT,29150
2018-09-14,KT&G,103500
2018-09-14,LG,72200
2018-09-14,LG생활건강,1243000
2018-09-14,LG전자,72100
2018-09-14,LG화학,352000
2018-09-14,NAVER,730000
2018-09-14,POSCO,294000
2018-09-14,S-Oil,129000
2018-09-14,SK,280500
2018-09-14,SK이노베이션,203500
2018-09-14,SK텔레콤,277000
2018-09-14,SK하이닉스,77700
2018-09-14,기아차,34050
2018-09-14,넷마블,116000
2018-09-14,삼성SDI,245000
2018-09-14,삼성물산,125500
2018-09-14,삼성생명,92000
2018-09-14,삼성에스디에스,242500
2018-09-14,삼성전자,45850
2018-09-14,삼성화재,258500
2018-09-14,신한지주,42750
2018-09-14,아모레퍼시픽,268500
2018-09-14,엔씨소프트,432500
2018-09-14,카카오,120000
2018-09-14,하나금융지주,43100
2018-09-14,한국전력,29900
2018-09-14,현대모비스,226500
2018-09-14,현대차,129500
2018-09-17,KB금융,50400
2018-09-17,KT,29700
2018-09-17,KT&G,101000
2018-09-17,LG,71700
2018-09-17,LG생활건강,1224000
2018-09-17,LG전자,71900
2018-09-17,LG화학,354000
2018-09-17,NAVER,728000
2018-09-17,POSCO,293000
2018-09-17,S-Oil,126500
2018-09-17,SK,281500
2018-09-17,SK이노베이션,201000
2018-09-17,SK텔레콤,278500
2018-09-17,SK하이닉스,77200
2018-09-17,기아차,34050
2018-09-17,넷마블,113500
2018-09-17,삼성SDI,246500
2018-09-17,삼성물산,125500
2018-09-17,삼성생명,91000
2018-09-17,삼성에스디에스,240000
2018-09-17,삼성전자,45150
2018-09-17,삼성화재,258000
2018-09-17,신한지주,42650
2018-09-17,아모레퍼시픽,263500
2018-09-17,엔씨소프트,430000
2018-09-17,카카오,121500
2018-09-17,하나금융지주,42650
2018-09-17,한국전력,29800
2018-09-17,현대모비스,222500
2018-09-17,현대차,128500
2018-09-18,KB금융,50300
2018-09-18,KT,29900
2018-09-18,KT&G,102500
2018-09-18,LG,71600
2018-09-18,LG생활건강,1254000
2018-09-18,LG전자,69000
2018-09-18,LG화학,367000
2018-09-18,NAVER,725000
2018-09-18,POSCO,296500
2018-09-18,S-Oil,130000
2018-09-18,SK,280500
2018-09-18,SK이노베이션,202500
2018-09-18,SK텔레콤,277000
2018-09-18,SK하이닉스,78000
2018-09-18,기아차,34500
2018-09-18,넷마블,111000
2018-09-18,삼성SDI,255000
2018-09-18,삼성물산,126000
2018-09-18,삼성생명,91100
2018-09-18,삼성에스디에스,239000
2018-09-18,삼성전자,45500
2018-09-18,삼성화재,257500
2018-09-18,신한지주,42000
2018-09-18,아모레퍼시픽,259000
2018-09-18,엔씨소프트,432500
2018-09-18,카카오,120500
2018-09-18,하나금융지주,42050
2018-09-18,한국전력,29500
2018-09-18,현대모비스,220000
2018-09-18,현대차,128000
2018-09-19,KB금융,50400
2018-09-19,KT,29600
2018-09-19,KT&G,103500
2018-09-19,LG,71500
2018-09-19,LG생활건강,1242000
2018-09-19,LG전자,68200
2018-09-19,LG화학,360000
2018-09-19,NAVER,731000
2018-09-19,POSCO,298500
2018-09-19,S-Oil,132500
2018-09-19,SK,279500
2018-09-19,SK이노베이션,201500
2018-09-19,SK텔레콤,269500
2018-09-19,SK하이닉스,78800
2018-09-19,기아차,34550
2018-09-19,넷마블,112000
2018-09-19,삼성SDI,256500
2018-09-19,삼성물산,123500
2018-09-19,삼성생명,90400
2018-09-19,삼성에스디에스,241000
2018-09-19,삼성전자,46150
2018-09-19,삼성화재,259000
2018-09-19,신한지주,42250
2018-09-19,아모레퍼시픽,255500
2018-09-19,엔씨소프트,441000
2018-09-19,카카오,117000
2018-09-19,하나금융지주,41900
2018-09-19,한국전력,28950
2018-09-19,현대모비스,221000
2018-09-19,현대차,126500
2018-09-20,KB금융,51500
2018-09-20,KT,29700
2018-09-20,KT&G,103000
2018-09-20,LG,71600
2018-09-20,LG생활건강,1221000
2018-09-20,LG전자,69000
2018-09-20,LG화학,361000
2018-09-20,NAVER,731000
2018-09-20,POSCO,298500
2018-09-20,S-Oil,129000
2018-09-20,SK,279500
2018-09-20,SK이노베이션,198500
2018-09-20,SK텔레콤,271500
2018-09-20,SK하이닉스,79100
2018-09-20,기아차,34850
2018-09-20,넷마블,117500
2018-09-20,삼성SDI,253500
2018-09-20,삼성물산,128500
2018-09-20,삼성생명,91700
2018-09-20,삼성에스디에스,234500
2018-09-20,삼성전자,47250
2018-09-20,삼성화재,258000
2018-09-20,신한지주,43250
2018-09-20,아모레퍼시픽,252000
2018-09-20,엔씨소프트,444500
2018-09-20,카카오,117500
2018-09-20,하나금융지주,43200
2018-09-20,한국전력,28700
2018-09-20,현대모비스,224500
2018-09-20,현대차,129000
2018-09-21,KB금융,53200
2018-09-21,KT,29200
2018-09-21,KT&G,105500
2018-09-21,LG,72400
2018-09-21,LG생활건강,1218000
2018-09-21,LG전자,69500
2018-09-21,LG화학,367000
2018-09-21,NAVER,725000
2018-09-21,POSCO,304500
2018-09-21,S-Oil,130500
2018-09-21,SK,285500
2018-09-21,SK이노베이션,200500
2018-09-21,SK텔레콤,269500
2018-09-21,SK하이닉스,76700
2018-09-21,기아차,34550
2018-09-21,넷마블,119000
2018-09-21,삼성SDI,256000
2018-09-21,삼성물산,131000
2018-09-21,삼성생명,96000
2018-09-21,삼성에스디에스,227500
2018-09-21,삼성전자,47400
2018-09-21,삼성화재,265000
2018-09-21,신한지주,44200
2018-09-21,아모레퍼시픽,249000
2018-09-21,엔씨소프트,449000
2018-09-21,카카오,118500
2018-09-21,하나금융지주,43750
2018-09-21,한국전력,28750
2018-09-21,현대모비스,223000
2018-09-21,현대차,129000
2018-09-27,KB금융,53700
2018-09-27,KT,29950
2018-09-27,KT&G,104000
2018-09-27,LG,72400
2018-09-27,LG생활건강,1278000
2018-09-27,LG전자,69600
2018-09-27,LG화학,370000
2018-09-27,NAVER,713000
2018-09-27,POSCO,305500
2018-09-27,S-Oil,136000
2018-09-27,SK,282500
2018-09-27,SK이노베이션,208500
2018-09-27,SK텔레콤,275000
2018-09-27,SK하이닉스,75000
2018-09-27,기아차,35250
2018-09-27,넷마블,118500
2018-09-27,삼성SDI,261000
2018-09-27,삼성물산,131000
2018-09-27,삼성생명,96000
2018-09-27,삼성에스디에스,230000
2018-09-27,삼성전자,47500
2018-09-27,삼성화재,272500
2018-09-27,신한지주,44600
2018-09-27,아모레퍼시픽,255000
2018-09-27,엔씨소프트,438000
2018-09-27,카카오,120500
2018-09-27,하나금융지주,43400
2018-09-27,한국전력,28950
2018-09-27,현대모비스,227500
2018-09-27,현대차,130500
2018-09-28,KB금융,54200
2018-09-28,KT,30150
2018-09-28,KT&G,104000
2018-09-28,LG,72600
2018-09-28,LG생활건강,1276000
2018-09-28,LG전자,71000
2018-09-28,LG화학,365500
2018-09-28,NAVER,716000
2018-09-28,POSCO,294500
2018-09-28,S-Oil,137000
2018-09-28,SK,287000
2018-09-28,SK이노베이션,215000
2018-09-28,SK텔레콤,282000
2018-09-28,SK하이닉스,73100
2018-09-28,기아차,35100
2018-09-28,넷마블,115000
2018-09-28,삼성SDI,258500
2018-09-28,삼성물산,129500
2018-09-28,삼성생명,97300
2018-09-28,삼성에스디에스,231000
2018-09-28,삼성전자,46450
2018-09-28,삼성화재,284000
2018-09-28,신한지주,45000
2018-09-28,아모레퍼시픽,261000
2018-09-28,엔씨소프트,442500
2018-09-28,카카오,119000
2018-09-28,하나금융지주,44550
2018-09-28,한국전력,29350
2018-09-28,현대모비스,228000
2018-09-28,현대차,129500
2018-10-01,KB금융,55600
2018-10-01,KT,30050
2018-10-01,KT&G,102500
2018-10-01,LG,73300
2018-10-01,LG생활건강,1316000
2018-10-01,LG전자,71100
2018-10-01,LG화학,368500
2018-10-01,NAVER,713000
2018-10-01,POSCO,295500
2018-10-01,S-Oil,137500
2018-10-01,SK,285500
2018-10-01,SK이노베이션,223000
2018-10-01,SK텔레콤,275500
2018-10-01,SK하이닉스,73700
2018-10-01,기아차,34350
2018-10-01,넷마블,116500
2018-10-01,삼성SDI,252500
2018-10-01,삼성물산,128000
2018-10-01,삼성생명,96100
2018-10-01,삼성에스디에스,227000
2018-10-01,삼성전자,46350
2018-10-01,삼성화재,284500
2018-10-01,신한지주,45150
2018-10-01,아모레퍼시픽,269500
2018-10-01,엔씨소프트,455000
2018-10-01,카카오,119500
2018-10-01,하나금융지주,45750
2018-10-01,한국전력,29350
2018-10-01,현대모비스,221000
2018-10-01,현대차,129000
2018-10-02,KB금융,54500
2018-10-02,KT,29500
2018-10-02,KT&G,100500
2018-10-02,LG,72600
2018-10-02,LG생활건강,1297000
2018-10-02,LG전자,69900
2018-10-02,LG화학,353000
2018-10-02,NAVER,689000
2018-10-02,POSCO,294000
2018-10-02,S-Oil,136000
2018-10-02,SK,284000
2018-10-02,SK이노베이션,225500
2018-10-02,SK텔레콤,272000
2018-10-02,SK하이닉스,71700
2018-10-02,기아차,34750
2018-10-02,넷마블,121000
2018-10-02,삼성SDI,250000
2018-10-02,삼성물산,126000
2018-10-02,삼성생명,96100
2018-10-02,삼성에스디에스,227000
2018-10-02,삼성전자,45700
2018-10-02,삼성화재,285000
2018-10-02,신한지주,45350
2018-10-02,아모레퍼시픽,264500
2018-10-02,엔씨소프트,423500
2018-10-02,카카오,115500
2018-10-02,하나금융지주,45600
2018-10-02,한국전력,28550
2018-10-02,현대모비스,218000
2018-10-02,현대차,128500
2018-10-04,KB금융,56100
2018-10-04,KT,29800
2018-10-04,KT&G,100000
2018-10-04,LG,72400
2018-10-04,LG생활건강,1197000
2018-10-04,LG전자,69000
2018-10-04,LG화학,329500
2018-10-04,NAVER,695000
2018-10-04,POSCO,274500
2018-10-04,S-Oil,134500
2018-10-04,SK,283000
2018-10-04,SK이노베이션,223000
2018-10-04,SK텔레콤,279500
2018-10-04,SK하이닉스,70000
2018-10-04,기아차,33700
2018-10-04,넷마블,119500
2018-10-04,삼성SDI,244000
2018-10-04,삼성물산,124500
2018-10-04,삼성생명,96500
2018-10-04,삼성에스디에스,222500
2018-10-04,삼성전자,44700
2018-10-04,삼성화재,284500
2018-10-04,신한지주,45900
2018-10-04,아모레퍼시픽,227500
2018-10-04,엔씨소프트,433000
2018-10-04,카카오,112000
2018-10-04,하나금융지주,46150
2018-10-04,한국전력,27450
2018-10-04,현대모비스,209500
2018-10-04,현대차,124500
2018-10-05,KB금융,56200
2018-10-05,KT,30000
2018-10-05,KT&G,101000
2018-10-05,LG,71900
2018-10-05,LG생활건강,1191000
2018-10-05,LG전자,70500
2018-10-05,LG화학,324000
2018-10-05,NAVER,704000
2018-10-05,POSCO,279000
2018-10-05,S-Oil,136500
2018-10-05,SK,290500
2018-10-05,SK이노베이션,224000
2018-10-05,SK텔레콤,281000
2018-10-05,SK하이닉스,70300
2018-10-05,기아차,34200
2018-10-05,넷마블,117500
2018-10-05,삼성SDI,237000
2018-10-05,삼성물산,125000
2018-10-05,삼성생명,96900
2018-10-05,삼성에스디에스,221000
2018-10-05,삼성전자,44700
2018-10-05,삼성화재,283000
2018-10-05,신한지주,45850
2018-10-05,아모레퍼시픽,225000
2018-10-05,엔씨소프트,417000
2018-10-05,카카오,109000
2018-10-05,하나금융지주,46400
2018-10-05,한국전력,27150
2018-10-05,현대모비스,208500
2018-10-05,현대차,124500
2018-10-08,KB금융,56000
2018-10-08,KT,29900
2018-10-08,KT&G,100500
2018-10-08,LG,69700
2018-10-08,LG생활건강,1190000
2018-10-08,LG전자,67800
2018-10-08,LG화학,321500
2018-10-08,NAVER,704000
2018-10-08,POSCO,271500
2018-10-08,S-Oil,133000
2018-10-08,SK,287500
2018-10-08,SK이노베이션,217500
2018-10-08,SK텔레콤,278500
2018-10-08,SK하이닉스,71200
2018-10-08,기아차,33900
2018-10-08,넷마블,122500
2018-10-08,삼성SDI,239000
2018-10-08,삼성물산,124000
2018-10-08,삼성생명,94600
2018-10-08,삼성에스디에스,217500
2018-10-08,삼성전자,44950
2018-10-08,삼성화재,284000
2018-10-08,신한지주,45550
2018-10-08,아모레퍼시픽,223000
2018-10-08,엔씨소프트,420500
2018-10-08,카카오,107500
2018-10-08,하나금융지주,46150
2018-10-08,한국전력,26350
2018-10-08,현대모비스,208000
2018-10-08,현대차,122000
2018-10-10,KB금융,55400
2018-10-10,KT,30000
2018-10-10,KT&G,102500
2018-10-10,LG,67200
2018-10-10,LG생활건강,1140000
2018-10-10,LG전자,65200
2018-10-10,LG화학,316000
2018-10-10,NAVER,704000
2018-10-10,POSCO,272000
2018-10-10,S-Oil,132500
2018-10-10,SK,285500
2018-10-10,SK이노베이션,216000
2018-10-10,SK텔레콤,285000
2018-10-10,SK하이닉스,70300
2018-10-10,기아차,33850
2018-10-10,넷마블,126000
2018-10-10,삼성SDI,238500
2018-10-10,삼성물산,123000
2018-10-10,삼성생명,94800
2018-10-10,삼성에스디에스,212000
2018-10-10,삼성전자,45300
2018-10-10,삼성화재,285500
2018-10-10,신한지주,46150
2018-10-10,아모레퍼시픽,212000
2018-10-10,엔씨소프트,420000
2018-10-10,카카오,104000
2018-10-10,하나금융지주,45850
2018-10-10,한국전력,25300
2018-10-10,현대모비스,205500
2018-10-10,현대차,120000
2018-10-11,KB금융,52800
2018-10-11,KT,29000
2018-10-11,KT&G,99400
2018-10-11,LG,62900
2018-10-11,LG생활건강,1047000
2018-10-11,LG전자,62300
2018-10-11,LG화학,307000
2018-10-11,NAVER,704000
2018-10-11,POSCO,257000
2018-10-11,S-Oil,129000
2018-10-11,SK,268500
2018-10-11,SK이노베이션,206000
2018-10-11,SK텔레콤,270000
2018-10-11,SK하이닉스,69000
2018-10-11,기아차,33100
2018-10-11,넷마블,126000
2018-10-11,삼성SDI,227000
2018-10-11,삼성물산,115000
2018-10-11,삼성생명,90900
2018-10-11,삼성에스디에스,204000
2018-10-11,삼성전자,43100
2018-10-11,삼성화재,277500
2018-10-11,신한지주,43900
2018-10-11,아모레퍼시픽,197500
2018-10-11,엔씨소프트,404500
2018-10-11,카카오,98500
2018-10-11,하나금융지주,43200
2018-10-11,한국전력,23850
2018-10-11,현대모비스,195500
2018-10-11,현대차,116000
2018-10-12,KB금융,52400
2018-10-12,KT,28800
2018-10-12,KT&G,96300
2018-10-12,LG,64300
2018-10-12,LG생활건강,1112000
2018-10-12,LG전자,64400
2018-10-12,LG화학,315500
2018-10-12,NAVER,142000
2018-10-12,POSCO,265000
2018-10-12,S-Oil,129500
2018-10-12,SK,270500
2018-10-12,SK이노베이션,211500
2018-10-12,SK텔레콤,270000
2018-10-12,SK하이닉스,72400
2018-10-12,기아차,33250
2018-10-12,넷마블,121000
2018-10-12,삼성SDI,244000
2018-10-12,삼성물산,117000
2018-10-12,삼성생명,90300
2018-10-12,삼성에스디에스,206000
2018-10-12,삼성전자,44000
2018-10-12,삼성화재,272000
2018-10-12,신한지주,43250
2018-10-12,아모레퍼시픽,207500
2018-10-12,엔씨소프트,418000
2018-10-12,카카오,101000
2018-10-12,하나금융지주,42600
2018-10-12,한국전력,24750
2018-10-12,현대모비스,195500
2018-10-12,현대차,115500`;
    return csv;
}