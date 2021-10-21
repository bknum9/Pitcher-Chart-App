from django.http import HttpResponseRedirect
from django.shortcuts import get_object_or_404
from django.shortcuts import render

from account.profile_form import ProfileForm


def my_profile(request):
    if request.method == 'POST':
        form = ProfileForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect('')
    else:
        form = ProfileForm()
    return render(request, 'account/my_profile.html', {'form': form})
