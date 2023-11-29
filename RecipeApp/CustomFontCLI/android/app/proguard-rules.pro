# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:

# Keep the application class
-keep class com.communityChef.communityChef

# Keep the entry point to your app (e.g., MainActivity)
-keep class com.communityChef.MainActivity

# Keep all classes in a particular package and its sub-packages
-keep class com.communityChef.models.** { *; }

# Keep specific methods from being obfuscated (e.g., methods used via reflection)
-keepclassmembers class com.communityChef.communityChef {
    public void yourMethod();
}

# Keep specific classes and their members from being obfuscated
-keepclassmembers class com.communityChef.communityChef {
    <fields>;
    <methods>;
}

# Add any additional rules specific to your app or libraries used
