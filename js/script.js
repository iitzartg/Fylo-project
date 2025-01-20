const themeToggleBtn = document.getElementById('theme-toggle')
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon')
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon')

if (storedTheme === "dark" || (!storedTheme && systemPrefersDark) && window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches){
  // Show light icon
  themeToggleLightIcon.classList.remove('hidden')
} else {
  themeToggleDarkIcon.classList.remove('hidden')
}

// Listen for toggle button click
themeToggleBtn.addEventListener('click',toggleMode)

function toggleMode(){
  // toggle icon
  themeToggleDarkIcon.classList.toggle('hidden')
  themeToggleLightIcon.classList.toggle('hidden')

  // if is set in localstorage
  if(localStorage.getItem('color-theme')){
    // if light, make dark and save in local storage
    if(localStorage.getItem('color-theme')==='light'){
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
    }
    else{
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
    }
  }else {
    // if not in localstorage
    if(document.documentElement.classList.contains('dark')){
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
    }else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
    }
  }
}