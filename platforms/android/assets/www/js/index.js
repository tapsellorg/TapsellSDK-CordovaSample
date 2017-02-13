/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var requestBtn = null;
var showBtn = null;
var adId = null;
 
var app = {
    // Application Constructor
    initialize: function() {
		console.log('tapsell initialize');
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
		console.log('tapsell bindEvents');
        document.addEventListener('deviceready', this.onDeviceReady, false);
		requestBtn = document.getElementById('btnRequestAd');
		showBtn = document.getElementById('btnShowAd');
		requestBtn.setAttribute('style', 'display:none;');
		showBtn.setAttribute('style', 'display:none;');
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
		console.log('tapsell onDeviceReady');
        app.receivedEvent('deviceready');
		requestBtn.setAttribute('style', 'display:block;');
		requestBtn.addEventListener('click',app.onRequestAd);
		showBtn.addEventListener('click',app.onShowAd);
		tapsell.initialize('rashssjnjiaeqqeihgjdsihajkbkqgeqqdoftpafmlcoofdflejgmttlercbsdfbnjnjqs');
		tapsell.setDebugMode(true);
		tapsell.setAutoHandlePermissions(true);
		tapsell.setMaxAllowedBandwidthUsagePercentage(50);
		tapsell.getVersion(function(result){
			if(result['action']=='getVersion')
			{
				console.log('tapsell version: '+result['version']);
			}
		});
		tapsell.setRewardCallback(function (result){
			requestBtn.setAttribute('style', 'display:block;');
			if(result['action']=='onAdShowFinished')
			{
				console.log('tapsell showAdFinished');
				console.log('completed: '+result['completed']);
				console.log('rewarded: '+result['rewarded']);
			}
		});
    },
	
	onRequestAd: function() {
		console.log('tapsell onRequestAd');
		tapsell.requestAd(null,false,function(result){
			if(result['action']=='onAdAvailable')
			{	
				zoneId = result['zoneId']; 
				adId = result['adId']; // id of the found ad
				console.log('tapsell onAdAvailable');
				requestBtn.setAttribute('style', 'display:none;');
				showBtn.setAttribute('style', 'display:block;');
			}
			else if( result['action']=='onNoAdAvailable' )
			{
				zoneId = result['zoneId'];
				console.log('tapsell onNoAdAvailable');
			}
			else if( result['action']=='onNoNetwork' )
			{
				zoneId = result['zoneId'];
				console.log('tapsell onNoNetwork');
			}
			else if( result['action']=='onError' )
			{
				zoneId = result['zoneId'];
				error = result['error']; // description of error
				console.log('tapsell onError: '+error);
			}
			else if(result['action']=='onExpiring')
			{	
				zoneId = result['zoneId'];
				adId = result['adId'];
				console.log('tapsell onExpiring: ');
			}
		});
	
	},
	
	onShowAd: function() {
		console.log('tapsell onShowAd');
		showBtn.setAttribute('style', 'display:none;');
		tapsell.showAd(adId,false,false,tapsell_rotation_unlocked,true);
	},
	
    // Update DOM on a Received Event
    receivedEvent: function(id) {
		console.log('tapsell receivedEvent');
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('tapsell Received Event: ' + id);
    }
};

app.initialize();