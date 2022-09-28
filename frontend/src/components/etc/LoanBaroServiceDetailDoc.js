import React from "react";
import map from "../../lib/img/nav_icon/map.png";

function LoanBaroServiceDetailDoc() {
  return (
    <>
      <h3 className='border'> 이용대상 </h3>
      <ul>
        <li>수원시 도서관 정회원 (연체자는 신청불가)</li>
      </ul>
      <h3 className='border'> 대출기간 </h3>
      <ul>
        <li>14일(연장 불가)</li>
      </ul>
      <h3 className='border'> 이용안내 </h3>
      <table>
        <tbody>
          <tr>
            <th>구 분</th>
            <th>이용안내</th>
          </tr>
          <tr>
            <th
              rowSpan='5'
              style={{
                minWidth: "100px",
                display: "table-cell",
                verticalAlign: "middle",
                alignItems: "center",
              }}
            >
              도 서<br />
              대출방법
            </th>
            <td>1. 도서관 홈페이지 및 수원시 도서관 앱에서 도서 신청</td>
          </tr>
          <tr>
            <td>
              2. 서점에 비치된 도서일 경우 : 서점에서 승인 <br />
              &nbsp;&nbsp; 서점에 미비치된 도서일 경우 : 서점에서 도서준비 -&gt;
              승인
            </td>
          </tr>
          <tr>
            <td>
              3. 이용자는 대출 가능 SMS 수신 후 7일이내 도서 대출
              (회원증+대출비밀번호)
              <br />
              &nbsp;&nbsp;※ 서점 보유 도서는 바로 대출가능
            </td>
          </tr>
          <tr>
            <td>4. 대출 후 2주간 도서 이용</td>
          </tr>
          <tr>
            <td>
              5. 서점에 도서 반납 (
              <span className='semiBorder' style={{ color: "red" }}>
                반납 시 회원증 필요
              </span>
              )<br />
              &nbsp;&nbsp;※ 도서 연체/미반납 시 대출정지, 오·훼손 시 변상,
              <span className='semiBorder'>
                미대출시 다음 1달간 『희망도서 바로대출 서비스』 신청 불가
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <h3 className='border'> 대출서점(협약서점) </h3>
      <table>
        <tbody className='gray'>
          <tr>
            <th>서점명</th>
            <th>주소 및 운영시간</th>
            <th>
              <span className='medi_block'>전화</span>번호
            </th>
            <th>위치</th>
          </tr>
          <tr>
            <th>
              경기서적<span className='medi_block'>(천천점)</span>
            </th>
            <td className='lh_20'>
              장안구 덕영대로 535번길 38 로얄프라자 2층
              <br />
              <span className='operationTime'>
                평일 11시 ~ 21시 / 주말, 공휴일 11시 ~ 19시
              </span>
            </td>
            <td>248-6300</td>
            <td>
              <a
                href='http://map.naver.com/?query=%EC%9E%A5%EC%95%88%EA%B5%AC%20%EB%8D%95%EC%98%81%EB%8C%80%EB%A1%9C%20535%EB%B2%88%EA%B8%B8%2038'
                target='_blank'
                rel='noreferrer'
              >
                <img src={map} alt='지도보기' />
              </a>
            </td>
          </tr>
          <tr>
            <th>
              경기서적<span className='medi_block'>(호매실점)</span>
            </th>
            <td className='lh_20'>
              권선구 금곡로 112 이수프라자 2층
              <br />
              <span className='operationTime'>
                평일 10시 ~ 21시, 토요일 10 ~ 19시
                <br />
                일요일, 공휴일 12시 ~ 19시
              </span>
            </td>
            <td>255-7500</td>
            <td>
              <a
                href='http://map.naver.com/?query=%EA%B6%8C%EC%84%A0%EA%B5%AC%20%EA%B8%88%EA%B3%A1%EB%A1%9C%20112'
                target='_blank'
                rel='noreferrer'
              >
                <img src={map} alt='지도보기' />
              </a>
            </td>
          </tr>
          <tr>
            <th>
              골드북<span className='medi_block'>서수원점</span>
            </th>
            <td className='lh_20'>
              권선구 금호로 39 (금곡동)
              <br />
              <span className='operationTime'>
                평일10시 ~ 21시, 토요일 10시 ~ 20시
                <br />
                일요일, 공휴일 15시 ~ 20시
              </span>
            </td>
            <td>295-7435</td>
            <td>
              <a
                href='http://map.naver.com/?query=%EA%B6%8C%EC%84%A0%EA%B5%AC%20%EA%B8%88%ED%98%B8%EB%A1%9C%2039'
                target='_blank'
                rel='noreferrer'
              >
                <img src={map} alt='지도보기' />
              </a>
            </td>
          </tr>
          <tr>
            <th>교문서적</th>
            <td className='lh_20'>
              팔달구 아주로 49 (우만동) 교문서적
              <br />
              <span className='operationTime'>
                평일 8시 ~ 23시
                <br />
                주말, 공휴일 9시 ~ 22시
              </span>
            </td>
            <td>211-3546</td>
            <td>
              <a
                href='http://map.naver.com/?query=%ED%8C%94%EB%8B%AC%EA%B5%AC%20%EC%95%84%EC%A3%BC%EB%A1%9C%2049'
                target='_blank'
                rel='noreferrer'
              >
                <img src={map} alt='지도보기' />
              </a>
            </td>
          </tr>
          <tr>
            <th>리틀존</th>
            <td className='lh_20'>
              영통구 반달로7번길 6 (영통동, 센타프라자) 117
              <br />
              <span className='operationTime'>
                평일, 토요일 10시 ~ 21시 / 공휴일 10시 ~ 20시 / 일요일 휴무
              </span>
            </td>
            <td>206-0594</td>
            <td>
              <a
                href='http://map.naver.com/?query=%EC%98%81%ED%86%B5%EA%B5%AC%20%EB%B0%98%EB%8B%AC%EB%A1%9C7%EB%B2%88%EA%B8%B8%206'
                target='_blank'
                rel='noreferrer'
              >
                <img src={map} alt='지도보기' />
              </a>
            </td>
          </tr>
          <tr>
            <th>망포문고</th>
            <td className='lh_20'>
              영통구 영통로 195 (망포동, 골든스퀘어) B109
              <br />
              <span className='operationTime'>
                평일, 주말, 공휴일 10시 ~ 21시
              </span>
            </td>
            <td>273-9662</td>
            <td>
              <a
                href='https://map.naver.com/v5/search/%EC%98%81%ED%86%B5%EA%B5%AC%20%EC%98%81%ED%86%B5%EB%A1%9C%20195/address/14143792.168084148,4473341.222396379,%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%88%98%EC%9B%90%EC%8B%9C%20%EC%98%81%ED%86%B5%EA%B5%AC%20%EC%98%81%ED%86%B5%EB%A1%9C%20195,new?c=14143689.2579268,4473350.4570411,17,0,0,0,dh'
                target='_blank'
                rel='noreferrer'
              >
                <img src={map} alt='지도보기' />
              </a>
            </td>
          </tr>
          <tr>
            <th>북앤조이서점</th>
            <td className='lh_20'>
              권선구 금곡동 140번길 95-117, 101호
              <br />
              <span className='operationTime'>
                평일, 주말 9시 ~ 19시
                <br />
                1,3주 주말 및 공휴일 휴무
              </span>
            </td>
            <td>292-1324</td>
            <td>
              <a
                href='https://map.naver.com/v5/search/%EA%B6%8C%EC%84%A0%EA%B5%AC%20%EA%B8%88%EA%B3%A1%EB%8F%99%20140%EB%B2%88%EA%B8%B8%2095-117,%20101%ED%98%B8/address/14132079.15352678,4477521.36070407,%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%88%98%EC%9B%90%EC%8B%9C%20%EA%B6%8C%EC%84%A0%EA%B5%AC%20%EA%B8%88%EA%B3%A1%EB%8F%99%20136-1,jibun?c=14131937.9843921,4477511.9838354,17,0,0,0,dh'
                target='_blank'
                rel='noreferrer'
              >
                <img src={map} alt='지도보기' />
              </a>
            </td>
          </tr>
          <tr>
            <th>상지문고</th>
            <td className='lh_20'>
              영통구 매탄로 106(매탄동, 두성프라자) 101호
              <br />
              <span className='operationTime'>
                평일 10시 ~ 22시 / 주말, 공휴일 10시 ~ 21시
              </span>
            </td>
            <td>214-6204</td>
            <td>
              <a
                href='http://map.naver.com/?query=%EC%98%81%ED%86%B5%EA%B5%AC%20%EB%A7%A4%ED%83%84%EB%A1%9C%20106'
                target='_blank'
                rel='noreferrer'
              >
                <img src={map} alt='지도보기' />
              </a>
            </td>
          </tr>
          <tr>
            <th>세종서림</th>
            <td className='lh_20'>
              수원시 장안구 정자천로 173번길 11-7 101호
              <br />
              <span className='operationTime'>
                평일, 주말, 공휴일 9시 ~ 22시
              </span>
            </td>
            <td>269-1245</td>
            <td>
              <a
                href='https://map.naver.com/v5/search/%EC%84%B8%EC%A2%85%EC%84%9C%EB%A6%BC?c=14136010.4356165,4480378.7652153,14,0,0,0,dh'
                target='_blank'
                rel='noreferrer'
              >
                <img src={map} alt='지도보기' />
              </a>
            </td>
          </tr>
          <tr>
            <th>숙지문고</th>
            <td className='lh_20'>
              팔달구 수성로 182번길 107 (화서동)
              <br />
              <span className='operationTime'>
                평일, 주말, 공휴일 9시 ~ 21시
              </span>
            </td>
            <td>257-1123</td>
            <td>
              <a
                href='http://map.naver.com/?query=%ED%8C%94%EB%8B%AC%EA%B5%AC%20%EC%88%98%EC%84%B1%EB%A1%9C%20182%EB%B2%88%EA%B8%B8%20107'
                target='_blank'
                rel='noreferrer'
              >
                <img src={map} alt='지도보기' />
              </a>
            </td>
          </tr>
          <tr>
            <th>
              앉으나서나<span className='medi_block'>책사랑서점</span>
            </th>
            <td className='lh_20'>
              장안구 경수대로994번길 23
              <br />
              <span className='operationTime'>
                평일, 주말, 공휴일 10시 ~ 20시
              </span>
            </td>
            <td>241-4345</td>
            <td>
              <a
                href='http://map.naver.com/?query=%EC%9E%A5%EC%95%88%EA%B5%AC%20%EA%B2%BD%EC%88%98%EB%8C%80%EB%A1%9C994%EB%B2%88%EA%B8%B8%2023'
                target='_blank'
                rel='noreferrer'
              >
                <img src={map} alt='지도보기' />
              </a>
            </td>
          </tr>
          <tr>
            <th>에듀문고</th>
            <td className='lh_20'>
              영통구 도청로 17번길 40 광교에듀센터 지1층
              <br />
              <span className='operationTime'>
                평일, 주말, 공휴일 11시 ~ 20시
              </span>
            </td>
            <td>214-0749</td>
            <td>
              <a
                href='https://map.naver.com/v5/search/%EC%98%81%ED%86%B5%EA%B5%AC%EB%8F%84%EC%B2%AD%EB%A1%9C17%EB%B2%88%EA%B8%B840/address/14143451.207615796,4478910.594343115,%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%88%98%EC%9B%90%EC%8B%9C%20%EC%98%81%ED%86%B5%EA%B5%AC%20%EB%8F%84%EC%B2%AD%EB%A1%9C17%EB%B2%88%EA%B8%B8%2040,new?c=14143397.9850926,4478919.8567433,18,0,0,0,dh'
                target='_blank'
                rel='noreferrer'
              >
                <img src={map} alt='지도보기' />
              </a>
            </td>
          </tr>
          <tr>
            <th>율전문고</th>
            <td className='lh_20'>
              장안구 서부로 2128
              <br />
              <span className='operationTime'>
                평일, 주말, 공휴일 9시 ~ 21시
              </span>
            </td>
            <td>295-9944</td>
            <td>
              <a
                href='http://map.naver.com/?query=%EC%9E%A5%EC%95%88%EA%B5%AC%20%EC%84%9C%EB%B6%80%EB%A1%9C%202128'
                target='_blank'
                rel='noreferrer'
              >
                <img src={map} alt='지도보기' />
              </a>
            </td>
          </tr>
          <tr>
            <th>이레문고</th>
            <td className='lh_20'>
              팔달구 일월로 22번길 8, 201호
              <br />
              <span className='operationTime'>
                평일 10시 ~ 21시 / 주말, 공휴일 10시 ~ 19시
              </span>
            </td>
            <td>291-7761</td>
            <td>
              <a
                href='https://map.naver.com/v5/search/%ED%8C%94%EB%8B%AC%EA%B5%AC%20%EC%9D%BC%EC%9B%94%EB%A1%9C%2022%EB%B2%88%EA%B8%B8%208'
                target='_blank'
                rel='noreferrer'
              >
                <img src={map} alt='지도보기' />
              </a>
            </td>
          </tr>
          <tr>
            <th>이상문고</th>
            <td className='lh_20'>
              영통구 태장로 77 (망포동) (망포동, 103, 104호)
              <br />
              <span className='operationTime'>
                평일 10시 ~ 22시 / 토요일 10시 ~ 20시 / 일요일, 공휴일 12시 ~
                20시
              </span>
            </td>
            <td>203-5453</td>
            <td>
              <a
                href='http://map.naver.com/?query=%EC%98%81%ED%86%B5%EA%B5%AC%20%ED%83%9C%EC%9E%A5%EB%A1%9C%2077'
                target='_blank'
                rel='noreferrer'
              >
                <img src={map} alt='지도보기' />
              </a>
            </td>
          </tr>
          <tr>
            <th>임광문고</th>
            <td className='lh_20'>
              영통구 동수원로 316 (매탄동, 임광아파트)
              <br />
              <span className='operationTime'>
                평일 10시 ~ 22시 / 주말, 공휴일 10시 ~ 21시
              </span>
            </td>
            <td>235-4730</td>
            <td>
              <a
                href='http://map.naver.com/?query=%EC%98%81%ED%86%B5%EA%B5%AC%20%EB%8F%99%EC%88%98%EC%9B%90%EB%A1%9C%20316'
                target='_blank'
                rel='noreferrer'
              >
                <img src={map} alt='지도보기' />
              </a>
            </td>
          </tr>
          <tr>
            <th>장안문고</th>
            <td className='lh_20'>
              장안구 대평로 80 (정자동) 정연메이저 지하1층 13호
              <br />
              <span className='operationTime'>
                평일 9시 30분 ~ 22시30분
                <br />
                주말, 공휴일 9시 30분 ~ 22시
              </span>
            </td>
            <td>269-4600</td>
            <td>
              <a
                href='https://map.naver.com/v5/search/%EC%9E%A5%EC%95%88%EA%B5%AC%20%EB%8C%80%ED%8F%89%EB%A1%9C%2080/address/14136865.034470808,4480381.074107286,%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%88%98%EC%9B%90%EC%8B%9C%20%EC%9E%A5%EC%95%88%EA%B5%AC%20%EB%8C%80%ED%8F%89%EB%A1%9C%2080,new?c=14136801.3460602,4480389.0046868,18,0,0,0,dh'
                target='_blank'
                rel='noreferrer'
              >
                <img src={map} alt='지도보기' />
              </a>
            </td>
          </tr>
          <tr>
            <th>제일서적</th>
            <td className='lh_20'>
              영통구 봉영로 1763,101호(영통동, 한성프라자)
              <br />
              <span className='operationTime'>
                평일, 토요일 10시 ~ 22시 / 일요일, 공휴일 10시 ~ 21시
              </span>
            </td>
            <td>206-3824</td>
            <td>
              <a
                href='https://map.naver.com/v5/search/%EC%98%81%ED%86%B5%EA%B5%AC%20%EB%B4%89%EC%98%81%EB%A1%9C%201763/address/14146664.901127454,4476317.312474055,%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%88%98%EC%9B%90%EC%8B%9C%20%EC%98%81%ED%86%B5%EA%B5%AC%20%EB%B4%89%EC%98%81%EB%A1%9C%201763,new?c=14146631.0217602,4476322.0799352,19,0,0,0,dh'
                target='_blank'
                rel='noreferrer'
              >
                <img src={map} alt='지도보기' />
              </a>
            </td>
          </tr>
          <tr>
            <th>진학서점</th>
            <td className='lh_20'>
              장안구 수일로 229, 102호(종민빌딩)
              <br />
              <span className='operationTime'>평일, 주말 8시 ~ 22시</span>
            </td>
            <td>243-0307</td>
            <td>
              <a
                href='http://map.naver.com/?query=%EC%9E%A5%EC%95%88%EA%B5%AC%20%EC%88%98%EC%9D%BC%EB%A1%9C%20229'
                target='_blank'
                rel='noreferrer'
              >
                <img src={map} alt='지도보기' />
              </a>
            </td>
          </tr>
          <tr>
            <th>일신서점</th>
            <td className='lh_20'>
              장안구 수성로 262번길 49
              <br />
              <span className='operationTime'>월~토, 9시 ~ 20시</span>
            </td>
            <td>251-0012</td>
            <td>
              <a
                href='https://map.naver.com/v5/search/%EC%9E%A5%EC%95%88%EA%B5%AC%20%EC%88%98%EC%84%B1%EB%A1%9C%20262%EB%B2%88%EA%B8%B8%2049/address/14137955.742841598,4479397.168152202,%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%88%98%EC%9B%90%EC%8B%9C%20%EC%9E%A5%EC%95%88%EA%B5%AC%20%EC%88%98%EC%84%B1%EB%A1%9C262%EB%B2%88%EA%B8%B8%2049,new?c=14137929.0929555,4479400.4982437,19,0,0,0,dh'
                target='_blank'
                rel='noreferrer'
              >
                <img src={map} alt='지도보기' />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <h3 className='border'> 유의사항 </h3>
      <ul>
        <li>
          서점 방문시 회원증(카드회원증,모바일앱)을 꼭 지참하시기 바랍니다.{" "}
        </li>
        <li></li>
        <li>
          도서관 회원의 등록은 도서관 홈페이지 회원가입 후, 도서관을 직접
          방문하여 신분증 등을 통한 본인확인 절차를 완료한 경우 가능합니다.
        </li>
        <li>
          신청하신 도서가 해당도서관에서 이미 소장중인 경우 신청이 제한될 수
          있으니, 그 점 유념하시기 바랍니다.
        </li>
        <li>
          서점에 원하시는 책이 없을 수 있으므로, 서점 방문 전 홈페이지나 앱을
          통해 미리 신청하여 주세요! 서점에서 확인 후 문자 드리오니, 그때
          방문하시면 불편 없이 이용하실 수 있습니다.
        </li>
        <li>
          바로대출 서비스 도서는 원하시는 도서관에 비치되지 않을 수 있사오니,
          특정 도서관 비치를 원하시는 책은 도서관 희망도서 서비스로 신청
          부탁드립니다.
        </li>
        <li>미대출시 다음달 희망도서 바로대출 서비스가 제한됩니다.</li>
      </ul>
      <h3 className='border'> 신청제외도서 </h3>
      <ul>
        <li>
          서점 방문시 회원증(카드회원증,모바일앱)을 꼭 지참하시기 바랍니다.
        </li>
        <li></li>
        <li>
          도서관 회원의 등록은 도서관 홈페이지 회원가입 후, 도서관을 직접
          방문하여 신분증 등을 통한 본인확인 절차를 완료한 경우 가능합니다.
        </li>
        <li>
          신청하신 도서가 해당도서관에서 이미 소장중인 경우 신청이 제한될 수
          있으니, 그 점 유념하시기 바랍니다.
        </li>
        <li>
          서점에 원하시는 책이 없을 수 있으므로, 서점 방문 전 홈페이지나 앱을
          통해 미리 신청하여 주세요! 서점에서 확인 후 문자 드리오니, 그때
          방문하시면 불편 없이 이용하실 수 있습니다.
        </li>
        <li>
          바로대출 서비스 도서는 원하시는 도서관에 비치되지 않을 수 있사오니,
          특정 도서관 비치를 원하시는 책은 도서관 희망도서 서비스로 신청
          부탁드립니다.
        </li>
        <li>미대출시 다음달 희망도서 바로대출 서비스가 제한됩니다.</li>
      </ul>
      <h3 className='border'> 희망도서 바로대출 신청조회 안내 </h3>
      <ul>
        <li>
          신청한 도서의 진행상황 및 처리결과는 ‘희망도서 바로대출’ -&gt;
          ‘신청현황’ 탭의 진행상태에서 확인가능합니다.
        </li>
        <li></li>
      </ul>
      <table>
        <tbody>
          <tr>
            <th>구 분</th>
            <th>상 태 설 명</th>
          </tr>
          <tr>
            <th>신청중</th>
            <td>이용자가 신청중인 상태</td>
          </tr>
          <tr>
            <th>신청취소</th>
            <td>이용자가 신청을 취소한 상태</td>
          </tr>
          <tr>
            <th>도서준비</th>
            <td>서점에서 도서를 준비하는 상태</td>
          </tr>
          <tr>
            <th>신청거절</th>
            <td>이용자가 신청한 도서를 서점/도서관에서 거절한 상태</td>
          </tr>
          <tr>
            <th>대출대기</th>
            <td>서점에서 이용자에게 도서를 대출하기 위해 대기하는 상태</td>
          </tr>
          <tr>
            <th>대출</th>
            <td>서점에서 이용자에게 도서를 대출해준 상태</td>
          </tr>
          <tr>
            <th>반납</th>
            <td>이용자가 도서를 서점에 반납한 상태</td>
          </tr>
          <tr>
            <th>미대출취소</th>
            <td>대출만기일까지 이용자가 대출을 하지 않은 상태</td>
          </tr>
        </tbody>
      </table>
      <h3 className='border'> 문의 </h3>
      <ul>
        <li>수원시 휴먼콜센터 : 1899-3300</li>
        <li>수원시 도서관</li>
      </ul>
      <table>
        <tbody className='gray'>
          <tr>
            <th>선경</th>
            <td>228-4728</td>
            <th>중앙</th>
            <td>228-4788</td>
            <th>창룡</th>
            <td>228-4881</td>
          </tr>
          <tr>
            <th>화서다산</th>
            <td>228-3547</td>
            <th>호매실</th>
            <td>228-4658</td>
            <th>서수원</th>
            <td>228-4749</td>
          </tr>
          <tr>
            <th>한림</th>
            <td>228-4855</td>
            <th>버드내</th>
            <td>228-4866</td>
            <th>북수원</th>
            <td>228-4778</td>
          </tr>
          <tr>
            <th>대추골</th>
            <td>228-4543</td>
            <th>일월</th>
            <td>228-4890</td>
            <th>광교홍재</th>
            <td>228-4639</td>
          </tr>
          <tr>
            <th>영통</th>
            <td>228-4756</td>
            <th>태장마루</th>
            <td>228-4833</td>
            <th>광교푸른숲</th>
            <td>228-3537</td>
          </tr>
          <tr>
            <th>매여울</th>
            <td>228-3571</td>
            <th>망포글빛</th>
            <td>228-4293</td>
            <th>시스템문의</th>
            <td>228-4732</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default LoanBaroServiceDetailDoc;
