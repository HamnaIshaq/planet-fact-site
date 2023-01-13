<template>
  <div>
    <div class="flex border-b">
      <header class="uppercase container flex-header flex-jsp">
        <a href="#" class="flex-header--logo">the planets</a>
        <input type="checkbox" class="flex-header__nav--toggle" id="flex-header__nav--toggle">
        
        <nav class="flex-header__nav">
          <ul class="flex-header__nav--ul">
            <li class="flex-header__nav--ul-li"><a href="#" class="flex-header__nav--ul-li-link">mercury</a></li>
            <li class="flex-header__nav--ul-li"><a href="#" class="flex-header__nav--ul-li-link">venus</a></li>
            <li class="flex-header__nav--ul-li"><a href="#" class="flex-header__nav--ul-li-link">earth</a></li>
            <li class="flex-header__nav--ul-li"><a href="#" class="flex-header__nav--ul-li-link">mars</a></li>
            <li class="flex-header__nav--ul-li"><a href="#" class="flex-header__nav--ul-li-link">jupiter</a></li>
            <li class="flex-header__nav--ul-li"><a href="#" class="flex-header__nav--ul-li-link">saturn</a></li>
            <li class="flex-header__nav--ul-li"><a href="#" class="flex-header__nav--ul-li-link">uranus</a></li>
            <li class="flex-header__nav--ul-li"><a href="#" class="flex-header__nav--ul-li-link">neptune</a></li>
          </ul>
        </nav>

        <label for="flex-header__nav--toggle" class="flex-header__nav--toggle-label">
          <span></span>
        </label>
      
      </header>
    </div>
    <div class="planet-info-btn-container border-b">
      <div class="container btn-container flex flex-jsp">
        <button type="button" class="btn uppercase btn-header">overview</button>
        <button type="button" class="btn uppercase btn-header">structure</button>
        <button type="button" class="btn uppercase btn-header">surface</button>
      </div>
    </div>
    
  </div>
</template>