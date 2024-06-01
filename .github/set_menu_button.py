import requests

bot_token = 'YOUR_BOT_TOKEN'
web_app_url = 'https://astrey-din-alt.github.io/sheli-html5'

response = requests.post(
    f'https://api.telegram.org/bot{bot_token}/setChatMenuButton',
    json={
        'menu_button': {
            'type': 'web_app',
            'text': 'Play Game',
            'web_app': {
                'url': web_app_url
            }
        }
    }
)

print(response.json())
