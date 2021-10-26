const BASEURL = "https://sponsor.ajay.app/api";

const getSkipSegments = (videoID, categoryParam) => {
  const url = `${BASEURL}/skipSegments?videoID=${videoID}&${categoryParam}&actionTypes=["skip","mute"]`;
  return fetch(url).then((res) => res.text());
};

const getSearchSegments = (videoID, page, filterParam) => {
  const url = `${BASEURL}/searchSegments?videoID=${videoID}&actionTypes=["skip","mute"]&page=${page}${filterParam}`;
  return fetch(url).then((res) => res.text());
};

const getUserInfo = (publicid) => {
  const url = `${BASEURL}/userInfo?publicUserID=${publicid}`;
  return fetch(url).then((res) => res.json());
};

const getUserInfoShowoff = (publicid) => {
  const url = `${BASEURL}/userInfo?publicUserID=${publicid}&values=["segmentCount", "viewCount", "minutesSaved", "userName", "vip"]`;
  return fetch(url).then((res) => res.json());
};

const getSegmentInfo = (segmentid) => {
  const url = `${BASEURL}/segmentInfo?UUID=${segmentid}`;
  return fetch(url).then((res) => res.json());
};

const getUserID = (searchString, exact) => {
  const url = `${BASEURL}/userID?username=${searchString}&exact=${exact}`;
  return fetch(url);
};

const getLockCategories = (videoID) => {
  const url = `${BASEURL}/lockCategories?videoID=${videoID}`;
  return fetch(url).then((res) => res.text());
};

const getStatus = () => {
  const url = `${BASEURL}/status`;
  return fetch(url);
};

const getUserStats = (userID) => {
  const url = `${BASEURL}/userStats?publicUserID=${userID}&fetchCategoryStats=true&fetchActionTypeStats=true`;
  return fetch(url).then((res) => res.json());
};

module.exports = {
  getSkipSegments,
  getSearchSegments,
  getUserInfo,
  getUserInfoShowoff,
  getSegmentInfo,
  getUserID,
  getLockCategories,
  getStatus,
  getUserStats
};
