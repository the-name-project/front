import { faClock, faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faMapMarkedAlt,
  faPhone,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  StoreHomeDetail,
  StoreHomeDetailList,
  StoreMap,
  StyledStoreHome,
} from "./StyledStoreHome";

const StoreHome = ({ getStore }) => {
  return (
    <StyledStoreHome>
      <StoreHomeDetail>
        <StoreHomeDetailList>
          <FontAwesomeIcon icon={faPhone} />
          <span>{getStore?.tel_number}</span>
        </StoreHomeDetailList>
        <StoreHomeDetailList>
          <FontAwesomeIcon icon={faMapMarkedAlt} />
          <span>{getStore?.address}</span>
        </StoreHomeDetailList>
        <StoreHomeDetailList>
          <FontAwesomeIcon icon={faClock} />
          <span>{getStore?.open_time}</span>
        </StoreHomeDetailList>
        <StoreHomeDetailList>
          <FontAwesomeIcon icon={faTag} />
          <span>{getStore?.tags}</span>
        </StoreHomeDetailList>
        <StoreHomeDetailList>
          <FontAwesomeIcon icon={faStar} color="green" />
          <span>{getStore?.naver_score} (네이버 평점)</span>
        </StoreHomeDetailList>
        <StoreHomeDetailList>
          <FontAwesomeIcon icon={faStar} color="blue" />
          <span>{getStore?.daum_score} (다음 평점)</span>
        </StoreHomeDetailList>
      </StoreHomeDetail>
    </StyledStoreHome>
  );
};

export default StoreHome;
