# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.template import loader
from django.core.mail import send_mail, BadHeaderError
import json

def home(request):
    return render(request, 'index.html')

def order(request):
	phone_num = request.POST.get('phone','')
	to = "to@address.com"
	sender = "from@address.com"
	subject = request.POST.get('name','')
	send_mail(subject, phone_num, 'from@example.com',
    [to], fail_silently=False)