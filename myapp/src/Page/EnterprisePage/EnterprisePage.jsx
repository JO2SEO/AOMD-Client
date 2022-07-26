import './EnterprisePage.css';

function EnterprisePage() {
	return (
		<div id="EnterprisePageTotalDiv">
			<div id="leftBox">
				<div className="leftTextBox">
					<h1> AOMD 영업점에</h1>
					<h1>문의하기 </h1>
					<p> AOMD를 어떻게 활용할지 함께 고민해드립니다.</p>
				</div>
			</div>
			<div id="rightBox">
				<form>
					<div className="oneBox" style={{ display: 'flex' }}>
						<div style={{ marginRight: '20px' }}>
							<p id="oneBoxName_p">이름 *</p>
							<input
								id="oneBoxName_input"
								type="text"
								placeholder="이름"
								autoComplete="off"
							/>
						</div>
						<div>
							<p id="oneBoxName_p">성 *</p>

							<input
								id="oneBoxName_input"
								type="text"
								placeholder="성"
								autoComplete="off"
							/>
						</div>
					</div>
					<div className="oneBox">
						<p>업무 이메일 *</p>
						<input type="email" placeholder="gildong@hong.com" autoComplete="off" />
					</div>
					<div className="oneBox">
						<p>회사 이름 *</p>
						<input type="text" placeholder="길동 주식회사" autoComplete="off" />
					</div>
					<div className="oneBox">
						<p>회사 규모 *</p>
						<select id="oneBoxselect" name="companysize" placeholder="선택해주세요">
							<option value="none"> 선택해주세요 </option>

							<option value="size1">1~19</option>
							<option value="size2">20~49</option>
							<option value="size3">50~99</option>
							<option value="size4">100~</option>
						</select>
					</div>
					<div className="oneBox">
						<p>궁금하신 내용이 있으신가요?</p>
						<textarea
							id="oneBoxtextarea"
							type="text"
							placeholder="Notion을 어떻게 사용하실 계획인지 적어주셔도 좋아요."
							autoComplete="off"
						/>
					</div>
					<div id="submitDescription">
						<p>Notion의 개인정보 보호정책에 동의하고 이 양식을 제출합니다.</p>
						<p>별표(*)가 있는 항목은 필수항목입니다.</p>
					</div>

					<button id="submitBtn"> 제출하기 </button>
				</form>
			</div>
		</div>
	);
}

export default EnterprisePage;
