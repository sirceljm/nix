<template>
	<f7-page class="main-app">
        <div id="main-top-bar">
            <div class="main-top-bar-item">
                <i class="fa fa-thermometer-half"></i>
            </div>
            <div class="main-top-bar-item main-top-bar-item-title">
                Sick leave
            </div>
            <div class="main-top-bar-item">
                <i class="fa fa-user"></i>
            </div>
        </div>
        <div id="main-content">
            <div class="sick-tabs margin-bottom-25 margin-top-minus">
                <div class="sick-tabs-header" v-on:click="toggleTab('active')">
                    <div class="sick-tabs-title"> Active sick leaves</div>
                    <span><i class="fa fa-ellipsis-h"></i></span>
                </div>
                <div class="sick-tab-content animated hide" v-bind:class="{'show slideInLeft': active}">
                    <div class="sick flex" v-on:click="sickSingle">
                        <div class="sick-day">
                            <div class="sick-day-wrap">
                                <div class="day">DAY</div>
                                <div class="day-num">2</div>
                            </div>
                        </div>
                        <div class="sick-content">
                            <div class="date">May 1, 2017</div>
                            <div class="permissions permissions-flex">
                                <span class="circle active"></span> Video recording submited
                            </div>
                        </div>
                        <div class="sick-price">
                            700€
                        </div>
                    </div>
                    <div class="sick flex">
                        <div class="sick-day">
                            <div class="sick-day-wrap">
                                <div class="day">DAY</div>
                                <div class="day-num">1</div>
                            </div>
                        </div>
                        <div class="sick-content">
                            <div class="date">May 19, 2017</div>
                            <div class="permissions">
                                <div class="permissions-flex"><span class="circle"></span> Pending GPS permissions,</div> <div>docktor's documents</div>
                            </div>
                        </div>
                        <div class="sick-price">
                            70€
                        </div>
                    </div>

                </div>
            </div>
            <div class="sick-main-content text-center">
                <div class="helper">Are you feeling better?</div>
                <div class="btn btn-primary width-80">End sick leave</div>
            </div>
            <div class="sick-tabs">
                <div class="sick-tabs-header" v-on:click="toggleTab('past')">
                    <div class="sick-tabs-title"> Past sick leaves</div>
                    <span><i class="fa fa-ellipsis-h"></i></span>
                </div>
                <div class="sick-tab-content animated hide" v-bind:class="{'show slideInLeft': past}">
                    <div class="sick flex flex-space">
                        <div class="sick-review">
                            <div class="sum">5 days</div>
                            <div class="sum-date">May 10, 2017 - May 15, 2017</div>
                        </div>
                        <div class="sick-price">
                            200€
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="main-bottom">

        </div>
	</f7-page>
</template>

<script>
	export default {
        created: function() {
            EventHub.$emit('nav', true);
        },
        methods: {
            toggleTab: function(name){
                if (this[name]) {
                    this[name] = false;
                } else {
                    this[name] = true;
                }
            },
            sickSingle: function() {
                // console.log(this.$router);
                // this.$router.loadPage({pageName: 'sickleaves'});
            }
        },
        data: function(){
            return {
                active:true,
                past: false,
            }
        },
    }
</script>