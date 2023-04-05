import axios from 'axios';

const BaseUrl = 'http://localhost:5050/api/v1';


const getToken = () => 	 localStorage.getItem('token');


const axiosClient = axios.create({
	baseURL: BaseUrl,

});

//APIを叩く前に前処理を行う
axiosClient.interceptors.request.use(async (config) => {
	//config.headers['Authorization'] = `Bearer ${token}`;
	return {
		config,
		headers: {
			'Content-Type': 'application/json',
			autjorization: `Bearer ${getToken()}`,//リクエストヘッダーにトークンを追加
		},
	};
});

//APIを叩いた後に後処理を行う
axiosClient.interceptors.response.use((response) => {
	return response;
},
(error) => {
	throw error.response;
});

export default axiosClient;