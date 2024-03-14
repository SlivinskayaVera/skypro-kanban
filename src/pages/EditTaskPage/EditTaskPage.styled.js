import styled from "styled-components";

const PopBrowseStatus = styled.div`
  margin-bottom: 11px;
`;

const StatusP = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 14px;
  button:focus {
    background: #94a6be;
    color: #ffffff;
  }
`;

const StatusTheme = styled.button`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
`;

const StatusThemeActive = styled.button`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: #94a6be;
  color: #ffffff;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
`;

export { PopBrowseStatus, StatusP, StatusThemes, StatusTheme, StatusThemeActive };
