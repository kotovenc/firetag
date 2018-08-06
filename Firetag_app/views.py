# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from django.core.mail import send_mail
from django.views.decorators.cache import cache_page
import json


@cache_page(60*15)
def home(request):
    return render(request, 'fullwidth.html')

def order(request):
	phone_num = request.POST.get("phone",'')
	name = request.POST.get("name",'')
	to = "nakmak1998@gmail.com"
	sender = "from@address.com"
	message = name + '\n' + phone_num
	subject = '13 Район: заказ звонка'
	send_mail(subject, message, 'from@example.com',
    [to], fail_silently=False)
	return HttpResponseRedirect('/thanks/')