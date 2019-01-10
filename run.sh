#!/bin/bash

function install_() {
	npm install
}

function run_() {
	react-native run-android
}

install_
run_

