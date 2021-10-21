from django.core.validators import EmailValidator
from django.core.validators import MinValueValidator
from django.db import models
from django.utils.translation import gettext_lazy as _


class Profile(models.Model):
    class Position(models.TextChoices):
        RIGHT_HANDED_PITCHER = 'RHP', _('Right Handed Pitcher')
        LEFT_HANDED_PITCHER = 'LHP', _('Left Handed Pitcher')
        CATCHER = 'C', _('Catcher')
        FIRST_BASE = '1B', _('First Base')
        SECOND_BASE = '2B', _('Second Base')
        THIRD_BASE = '3B', _('Third Base')
        SHORTSTOP = 'SS', _('Shortstop')
        LEFT_FIELD = 'LF', _('Left Field')
        CENTER_FIELD = 'CF', _('Center Field')
        RIGHT_FIELD = 'RF', _('Right Field')
        DESIGNATED_HITTER = 'DH', _('Designated Hitter')
    
    class Handedness(models.TextChoices):
        LEFT = 'Left'
        RIGHT = 'Right'
        BOTH = 'Both'
    
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    height = models.IntegerField(validators=[MinValueValidator(0)])
    weight = models.IntegerField(validators=[MinValueValidator(0)])
    age = models.IntegerField(validators=[MinValueValidator(0)])
    position = models.CharField(max_length=3, choices=Position.choices, default=Position.RIGHT_HANDED_PITCHER)
    handedness = models.CharField(max_length=5, choices=Handedness.choices, default=Handedness.RIGHT)
    location = models.CharField(max_length=200, )
    team = models.CharField(max_length=100)
    email = models.CharField(max_length=100, validators=[EmailValidator()])
    profile_name = models.CharField(max_length=100)
    password = models.CharField(max_length=50)
