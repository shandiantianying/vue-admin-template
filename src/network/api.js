export default {
  login: 'v1/user/checkUser', // 登录
  tdinit: '/v1/initTaskData?pageNum=PAGENUM', // url错误
  tdprefill: '/v1/ytxTaskData?pageNum=PAGENUM' ,// 参数错误
  tdsenddeclare: '/v1/fsbbTaskData?pageNum=PAGENUM' ,
  tddeclarepay: '/v1/scjyskjnTaskData?pageNum=PAGENUM' ,
  userPwdedit: '/v1/user/editUserPwd' ,
  cpdataQuery:'v1/creditpre/queryDatalist?ageNum=PAGENUM',
  sinfoQuery:'v1/shareInfo/queryData?ageNum=PAGENUM',
  sinfoshhQuery:'v1/shareInfo/queryShhData?ageNum=PAGENUM',
}