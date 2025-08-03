Real-world examples for each **SOLID principle**, using **Python** for brevity and clarity.

---

### ✅ 1. Single Responsibility Principle (SRP)

```python
class Invoice:
    def __init__(self, items):
        self.items = items

    def calculate_total(self):
        return sum(item['price'] for item in self.items)

class InvoicePrinter:
    def print_invoice(self, invoice):
        print("Total:", invoice.calculate_total())

class InvoiceSaver:
    def save_to_file(self, invoice):
        with open("invoice.txt", "w") as f:
            f.write(str(invoice.calculate_total()))
```

---

### ✅ 2. Open/Closed Principle (OCP)

```python
class PaymentMethod:
    def pay(self, amount):
        pass

class CreditCard(PaymentMethod):
    def pay(self, amount):
        print(f"Paid ₹{amount} using Credit Card.")

class PayPal(PaymentMethod):
    def pay(self, amount):
        print(f"Paid ₹{amount} using PayPal.")

class PaymentProcessor:
    def process_payment(self, payment_method: PaymentMethod, amount):
        payment_method.pay(amount)
```

---

### ✅ 3. Liskov Substitution Principle (LSP)

```python
class Bird:
    def make_sound(self):
        print("Chirp")

class FlyingBird(Bird):
    def fly(self):
        print("Flying high!")

class Sparrow(FlyingBird):
    pass

class Penguin(Bird):
    pass
```

---

### ✅ 4. Interface Segregation Principle (ISP)

```python
class Printer:
    def print_doc(self):
        pass

class Scanner:
    def scan_doc(self):
        pass

class BasicPrinter(Printer):
    def print_doc(self):
        print("Printing document...")

class MultiFunctionPrinter(Printer, Scanner):
    def print_doc(self):
        print("Printing document...")

    def scan_doc(self):
        print("Scanning document...")
```

---

### ✅ 5. Dependency Inversion Principle (DIP)

```python
class Notifier:
    def send(self, message):
        pass

class EmailNotifier(Notifier):
    def send(self, message):
        print(f"Sending Email: {message}")

class SMSNotifier(Notifier):
    def send(self, message):
        print(f"Sending SMS: {message}")

class NotificationService:
    def __init__(self, notifier: Notifier):
        self.notifier = notifier

    def notify(self, msg):
        self.notifier.send(msg)
```

---

Let me know if you want:

* Same examples in **Java or C++**
* Combined mini-project
* Unit test samples for any of these
