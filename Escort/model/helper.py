import time


def generate_time(length=3):
    t = time.localtime()
    now = t.tm_hour
    times = []
    for l in xrange(length):
        times.append('%s:00-%s:00' % (now, now + 1))
        now = now + 1
    return times
