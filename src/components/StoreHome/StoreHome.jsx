import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faBed,
  faHome,
  faMapMarkedAlt,
  faParking,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  StoreHomeDetail,
  StoreHomeDetailList,
  StoreMap,
  StyledStoreHome,
} from "./StyledStoreHome";

const StoreHome = () => {
  return (
    <StyledStoreHome>
      <StoreMap>
        <div>지도</div>
      </StoreMap>
      <StoreHomeDetail>
        <StoreHomeDetailList>
          <FontAwesomeIcon icon={faPhone} />
          <span>0507-1398-7125</span>
        </StoreHomeDetailList>
        <StoreHomeDetailList>
          <FontAwesomeIcon icon={faMapMarkedAlt} />
          <span>경성대.부경대역 1번 출구에서104m</span>
        </StoreHomeDetailList>
        <StoreHomeDetailList>
          <FontAwesomeIcon icon={faClock} />
          <span>매일 10:30 - 03:00</span>
        </StoreHomeDetailList>
        <StoreHomeDetailList>
          <FontAwesomeIcon icon={faHome} />
          <a href="https://blog.naver.com/tkanfkdl45">
            https://blog.naver.com/tkanfkdl45
          </a>
        </StoreHomeDetailList>
        <StoreHomeDetailList>
          <FontAwesomeIcon icon={faParking} />
          <span>주차 가능</span>
        </StoreHomeDetailList>
        <StoreHomeDetailList>
          <FontAwesomeIcon icon={faBed} />
          <span>매주 월요일</span>
        </StoreHomeDetailList>
      </StoreHomeDetail>
    </StyledStoreHome>
  );
};

export default StoreHome;
