<template>
	<!-- App -->
	<div id="app">

		<!-- Statusbar -->
		<!-- <f7-statusbar></f7-statusbar> -->

		<!-- Right Panel -->
		<f7-panel right cover layout="dark">
			<f7-view id="right-panel-view" navbar-through :dynamic-navbar="true">
				<f7-navbar title="Right Panel" sliding></f7-navbar>
				<f7-pages>
					<f7-page>
						<f7-block>
							<p>lalalla
							</p>
						</f7-block>
					</f7-page>
				</f7-pages>
			</f7-view>
		</f7-panel>

		<!-- Main Views -->
		<f7-views>
			<f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
				<!-- Pages -->
				<f7-pages>
					<f7-page class="landing">
						<h1 class="landing-title"> Lanceout insurance</h1>
						<div class="landing-subtitle">We have your back</div>
						<f7-link href="/dashboard/">Dashboard</f7-link>
						<div class="landing-bottom">
							<div class="landing-bottom-text">Already have an account with us?</div>
							<f7-link href="/login/">Login</f7-link>
							<div class="landing-btn">
								<f7-link href="/signup-step1/" class="btn btn-primary">Create an account</f7-link>
							</div>
						</div>
					</f7-page>
				</f7-pages>
				<div id="main-nav" class="animated ni" v-bind:class="{'flex bounceInUp':bottom_nav}">
            <div class="main-nav-item">
                <i class="fa fa-home"></i>
            </div>
            <div class="main-nav-item">
                <i class="fa fa-desktop"></i>
            </div>
            <div class="main-nav-item">
                <i class="fa fa-question-circle"></i>
            </div>
            <div class="main-nav-item active">
                <i class="fa fa-thermometer-half"></i>
            </div>
            <div class="main-nav-item">
                <i class="fa fa-user"></i>
            </div>
        </div>

			</f7-view>
		</f7-views>

		<!-- Popup -->
		<f7-popup id="popup">
			<f7-view navbar-fixed>
				<f7-pages>
					<f7-page>
						<f7-navbar title="Popup">
							<f7-nav-right>
								<f7-link :close-popup="true">Close</f7-link>
							</f7-nav-right>
						</f7-navbar>
						<f7-block>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.</f7-block>
					</f7-page>
				</f7-pages>
			</f7-view>
		</f7-popup>

	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				bottom_nav: false,
			}
		},
		mounted: function(){
			var vm = this;
			EventHub.$on('nav', function(state){
				vm.bottom_nav = state;
			});
		}
	}
</script>
