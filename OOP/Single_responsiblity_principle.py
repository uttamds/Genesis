class Notifier:
    def send(self, message):
        pass

class EmailNotifier(Notifier):
    def send(self, message):
        print(f"Sending Email: {message}")

class SMSNotifier(Notifier):
    def send(self, message):
        print(f"Sending SMS: {message}")

class WANotifier(Notifier):
    def send(self, message):
        print(f'Sending WA : {message}')


class NotificationService:
    def __init__(self, notifier: Notifier):
        self.notifier = notifier

    def notify(self, msg):
        self.notifier.send(msg)

# Using EmailNotifier
email_service = NotificationService(EmailNotifier())
email_service.notify("Meeting at 10 AM")

    # Using SMSNotifier
sms_service = NotificationService(SMSNotifier())
sms_service.notify("Your OTP is 123456")

wa_service = NotificationService(WANotifier())
wa_service.notify("Lunch at 1pm")


