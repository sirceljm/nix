<template>
	<f7-page class="primary-bg">
		<!-- <f7-navbar title="Form" back-link="Back" sliding></f7-navbar> -->
		<!-- <f7-block-title>step2</f7-block-title> -->
        <h2 class="title">Create an account</h2>
        <div class="title-desc-wrap">
            Please provide your personal information in the fields below so we can get started.
        </div>
        <f7-toolbar class="bottom-nav" bottom>
           <div class="text-center bottom-nav-links button-col">
                <a class="link ">
                    <div class="" v-on:click="goBack">
                       <span class="hidden-color"><i class=" margin-right fa fa-angle-left"></i></span>
                            BACK
                    </div>
                </a>
               <f7-link href="/signup-step3/">
                   <div class="text-center">
                       next
                       <span class="hidden-color"><i class=" margin-left fa fa-angle-right"></i></span>
                   </div>
               </f7-link>
           </div>
       </f7-toolbar>
        <f7-block>
            <div class="form-content-wrap">
                <div class="form-group">
                    <input type="text" name="phone"  placeholder="Phone number" class="form-control" >
                </div>
                 <div class="form-group">
                    <input type="text" name="address"  placeholder="Street address" class="form-control" >
                </div>
            </div>

        </f7-block>
        <div class="map-wrap">
            <div class="title-desc-content">
                Is this your location?
            </div>
            <div id="map"></div>
        </div>
        <div class="bullets">
            <span class="bullet"></span>
            <span class="bullet active"></span>
            <span class="bullet"></span>
        </div>
        <!-- <div class="bottom-nav flex flex-center">
            <div class="text-center bottom-nav-links">
                <div class="col-xs-6 button-col">
                    <span class="hidden-color"><i class="fa fa-angle-left"></i></span>
                        <a v-on:click="goBack">Back</a>
                </div>
                 <div class="col-xs-6 button-col">
                        <f7-link href="/signup-step3/">next</f7-link>
                        <span class="hidden-color"><i class="fa fa-angle-right"></i></span>
                </div>
            </div>
        </div> -->
	</f7-page>
</template>

<script>
    import backMixin from './backMixin'
	export default {
        mixins: [backMixin],
        methods: {
            mapInit(uluru) {
                // var uluru = {lat: -25.363, lng: 131.044};
                 var map = new google.maps.Map(document.getElementById('map'), {
                  zoom: 16,
                  center: uluru
                });
                var marker = new google.maps.Marker({
                  position: uluru,
                  map: map
                });
                var marker = new google.maps.Marker({
                  position: uluru,
                  map: map
                });
            }
        },
        mounted: function() {
            var vm = this;
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (p) {
                    let lat = p.coords.latitude.toFixed(3)
                    let lng = p.coords.longitude.toFixed(3)
                    var uluru = {
                        lat: parseFloat(lat), lng: parseFloat(lng)
                    };
                    vm.mapInit(uluru);
                });
            } else {
                alert('Geo Location feature is not supported in this browser.');
            }
        }
    }
</script>