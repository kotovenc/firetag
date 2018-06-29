# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from django.http import HttpResponse


def home(request):
    return HttpResponse("Hello, world. You're at the Firetag home.")

def contact(request):
    return HttpResponse("Hello, world. You're at the Firetag contact.")

def services(request):
    return HttpResponse("Hello, world. You're at the Firetag services.")

def enviroment(request):
    return HttpResponse("Hello, world. You're at the Firetag enviroment.")

def games(request):
    return HttpResponse("Hello, world. You're at the Firetag games.")


