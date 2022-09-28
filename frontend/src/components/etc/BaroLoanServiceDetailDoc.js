import React from "react";

function BaroLoanServiceDetailDoc() {
  return (
    <>
      <h3 className='border'> 이용대상 </h3>
      <ul>
        <li>수원시 도서관 정회원 (연체자는 신청불가)</li>
      </ul>
      <h3 className='border'> 대출기간 </h3>
      <ul>
        <li>14일</li>
      </ul>
      <h3 className='border'> 이용안내</h3>
      <ul>
        <li>도서관 홈페이지 및 수원시 도서관 앱에서 도서 신청</li>
        <li>
          우선대출 안내 SMS(알림톡 또는 문자) 수신 후 도서관 방문 대출
          <p>
            (우선대출이란 : 희망도서의 신속한 제공을 위하여 비치된 날로부터
            3일간 신청자에게 우선대출하는 제도)
          </p>
        </li>
        <li>
          독서 후 도서관에 방문하여 반납
          <p>※ 도서 연체, 미반납, 오·훼손 시 이용제한(대출 정지 및 변상)</p>
        </li>
      </ul>
      <h3 className='border'> 도서관 희망도서 신청조회 안내 </h3>
      <ul>
        <li>
          신청한 도서의 진행상황 및 처리결과는 홈페이지 및 도서관앱에서 확인
          가능
        </li>
      </ul>
      <table>
        <tbody>
          <tr>
            <th>구 분</th>
            <th>상 태 설 명</th>
          </tr>
          <tr>
            <th>신청중</th>
            <td>이용자가 도서관에 희망도서를 신청한 상태</td>
          </tr>
          <tr>
            <th>처리중</th>
            <td>신청한 희망도서가 구입이 반영된 경우</td>
          </tr>
          <tr>
            <th>소장중</th>
            <td>도서가 자료실에 비치된 상태</td>
          </tr>
          <tr>
            <th>취소됨</th>
            <td>신청한 자료가 취소되는 경우로 취소사유가 표시됨</td>
          </tr>
        </tbody>
      </table>
      <h3 className='border'> 도서관 희망도서 신청조회 안내 </h3>
      <ul>
        <li>도서관에 소장 중인 도서(구입, 정리 중인 자료 포함)</li>
        <li>
          수원시도서관 상호대차 서비스로 대출 가능 도서(단, 어린이도서 제외)
        </li>
        <li>발행년 5년 경과된 도서, 5만원 초과 도서</li>
        <li>
          품절, 절판, 미출간(예약판매), POD(주문제작도서) 등 정상 구입이
          불가능한 도서
        </li>
        <li>
          각종 수험서, 자격증 도서, 문제집, 교과서, 만화, 그래픽노블,
          라이트노벨, 게임서, 판타지, 무협지, 인터넷 소설 등 <br />
          &nbsp;&nbsp;(문단에서 인정받은 작품, 수상작 등은 일부 허용)
        </li>
        <li>
          자료의 형태가 도서관 소장도서로 부적합한 도서
          <br />
          &nbsp;&nbsp;(스프링도서, 쓰기익힘책, 워크북, 퍼즐북, 스티거북, 팝업북,
          컬러링북, 필사책, 악보집,대본집 등)
        </li>
        <li>
          원서, 논문, 전집류, 사전류, 지도류, 정기간행물, 비도서, 오디오북,
          전자책
        </li>
        <li>특정 종교의 포교를 위한 종교도서</li>
        <li>공공도서관 장서로 부적합한 내용의 도서</li>
      </ul>
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
            <th>슬기샘</th>
            <td>242-6633</td>
          </tr>
          <tr>
            <th>지혜샘</th>
            <td>225-5566</td>
            <th>바른샘</th>
            <td>216-9373</td>
            <th>한아름</th>
            <td>218-0420</td>
          </tr>
          <tr>
            <th>희망샘</th>
            <td>291-6943</td>
            <th>사랑샘</th>
            <td>548-5660</td>
            <th>시스템문의</th>
            <td>228-4732</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default BaroLoanServiceDetailDoc;
